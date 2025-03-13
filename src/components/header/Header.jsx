import React, { useState } from "react";
import  {AiOutlineHome} from "react-icons/ai";


const Header = ({ Tasks, setTasksController }) => {
  const [task, setTask] = useState("");

  const todo = { title: task, id: Date.now() };

  function handleTaskSubmit() {
    console.log(task);
    setTasksController([...Tasks, todo]); //add new task when clicking on button
    setTask("");
  }

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="headerdiv">
      <div className="titlediv">
        <h1>todos</h1>
      </div>

      <div className="middlediv">
        <h3>WHAT'S NEXT... ?</h3>
      </div>

      <div className="inputdiv">
        <div className="input">
          <input
            placeholder="What Do You Need To Do"
            type="text"
            value={task}
            className="taskinput"
            onChange={handleTaskChange}
          />
          <button onClick={handleTaskSubmit} className="addbtn">
            ADD
          </button>
        </div>

        <div className="linediv"></div>
      </div>

      <div className="taskstext">
        
        < h2>RECENT NOTES</h2>
      
      </div>
    </div>
  );
};

export default Header;
