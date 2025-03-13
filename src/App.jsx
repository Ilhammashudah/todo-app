import { useState } from "react";
import Header from "./components/header/Header";
import Task from "./components/task/Task";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>

    
      <Header Tasks={tasks} setTasksController={setTasks} />
      <section>
        {tasks.map((x) => (
          <Task
            key={x.id}
            Task={x.title}
            id={x.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </section>
      
    </>
  );
}

export default App;
