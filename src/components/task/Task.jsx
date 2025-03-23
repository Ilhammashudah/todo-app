import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../brain/features/todos";
import { editTodo } from "../../brain/features/todos";

const Task = ({ Task, id }) => {
  // function TaskComponent({ todo }) {
  //   const dispatch = useDispatch();
  // }

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  function handleDeleteTask() {
    // setTasks(tasks.filter((task) => task.id != id));
    dispatch(deleteTodo(id));
  }

  // const [editTask, setEditTask] = useState([]);

  // const handleChangeTask = (e) => {
  //   setEditTask(e.target.value);
  // };

  function handleTaskEdit() {
    setIsEdit(true);
  }

  const [editTaskValue, setEditTaskValue] = useState(Task);

  const handleTaskUpdateValue = (e) => {
    setEditTaskValue(e.target.value);
  };

  const handleSaveTaskUpdate = () => {
    // dispatch(editTodo( {id,newTitle:editTaskValue}));

    if (editTaskValue) dispatch(editTodo({ id, newTitle: editTaskValue }));

    setIsEdit(false);

    // setTasks(
    //   tasks.map((task) => ({
    //     ...task,
    //     title: task.id == id ? editTaskValue : task.title,
    //   }))
    // );
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
          <input type="checkbox" />

          <p>{Task}</p>

          <button onClick={handleDeleteTask} className="deletebtn">
            del
          </button>
          <button onClick={handleTaskEdit} className="deletebtn">
            edit
          </button>
          <input type="time" className="date" />
        </div>
      )}
    </div>
  );
};

export default Task;
