import React, { useState } from "react";

const Task = ({ Task, tasks, setTasks, id }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [editTaskValue, setEditTaskValue] = useState(Task);

  const handleTaskUpdateValue = (e) => {
    setEditTaskValue(e.target.value);
  };

  function handleDeleteTask() {
    setTasks(tasks.filter((task) => task.id != id));
  }

  const [editTask, setEditTask] = useState([]);

  const handleChangeTask = (e) => {
    setEditTask(e.target.value);
  };

  function handleTaskEdit() {
    setIsEdit(true);
  }

  const handleSaveTaskUpdate = () => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        title: task.id == id ? editTaskValue : task.title,
      }))
    );

    setIsEdit(false);
  };

  return (
    <div className="maincontainer">
        

      {isEdit ? (
        <div className="taskcontainer">
          <input
            type="text"
            placeholder={editTaskValue}
            value={editTaskValue}
            onChange={handleTaskUpdateValue}
            className="editinput"
          />
          <button onClick={handleSaveTaskUpdate} className="deletebtn">
            Save
          </button>
        </div>
      ) : (
        <div className="taskcontainer">
          <input type="checkbox"  />

          <p>{Task}</p>

          <button onClick={handleDeleteTask} className="deletebtn">
            del
          </button>
          <button onClick={handleTaskEdit} className="deletebtn">
           edit
          </button>
          <input type="time" className="date"/>
        </div>
      )}
    </div>
  );
};

export default Task;
