import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Task from "./components/task/Task";
import { useDispatch } from "react-redux";

import "./App.css";
import { useSelector } from "react-redux";
import { getTodos } from "./brain/features/todos";
import SignIn from "./components/pages/signin/SignIn";
import Todo from "./components/MainPage/Todo";
import Signup from "./components/pages/signup/SignUp";
import Routes from "./components/routes/Routes";
// import { useDispatch } from "react-redux";
 

function App() {
  // const { todos, isLoading } = useSelector((store) => store.todoReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, []);
  // const [tasks, setTasks] = useState([]);
  // console.log(todos);

  


  return (
    <>
      {/* <Todo /> */}
      {/* <Header /> */}
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      <Routes/>



      
      {/* <section>
        {isLoading ? (
          <div>
            <p>Loading..</p>
          </div>
        ) : (
          todos.map((x) => <Task key={x.id} Task={x.title} id={x.id} />)
        )}
      </section> */}
    </>
  );
}

export default App;
