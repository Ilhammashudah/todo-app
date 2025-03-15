import { useState } from "react";
import Header from "./components/header/Header";
import Task from "./components/task/Task";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const {todos }= useSelector((store) => store.todoReducer);
  // const [tasks, setTasks] = useState([]);
  // console.log(todos);
  return (
    <>
      <Header />
      <section>
        {todos.map((x) => (
          <Task key={x.id} Task={x.title} id={x.id} />
        ))}
      </section>
    </>
  );
}

export default App;
