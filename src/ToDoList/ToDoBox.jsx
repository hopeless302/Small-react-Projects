import React, { useState } from "react";

export default function ToDoBox() {
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState([]);

  const settingInput = (e) => {
    setToDo(e.target.value);
  };

  const addTask = () => {
    if (toDo.trim() !== "") {
      setTasks([...tasks, toDo]);
      setToDo("");
    }
  };


  const editTask = (index) => {
    // Logic for editing a task
  };

  const updateTask = (index) => {
    // Logic for updating a task
  };

  const deleteTask = (index) => {
    // Logic for deleting a task
  };

  return (
    <>
      <div className="flex justify-center items-center rounded-md mx-auto mt-12 bg-blue-300 py-2 w-3/4">
        <input
          type="text"
          value={toDo}
          onChange={settingInput}
          placeholder="Write a task..."
          className="rounded py-2 ml-2 bg-blue-300 font-semibold w-full"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-center mt-12 w-3/4 mx-auto">
        <h2 className="font-bold mb-4">Your ToDo Lists</h2>
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center rounded-md bg-blue-300 py-2 w-full shadow-xl">
            <div className="ml-4">{task}</div>
            <div className="mr-4 ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => updateTask(index)}>
                Update
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
