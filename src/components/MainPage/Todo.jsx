import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../../brain/features/todos";
import { useDispatch } from "react-redux";
import Header from "../header/Header";


const Todo = () => {
  const { todos, isLoading } = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Header />

      <section>
        {isLoading ? (
          <div>
            <p>Loading..</p>
          </div>
        ) : (
          todos.map((x) => <Task key={x.id} Task={x.title} id={x.id} />)
        )}
      </section>
    </>
  );
};

export default Todo;
