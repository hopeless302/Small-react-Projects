import React, { useState } from "react";

export default function ToDoBox() {
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const settingInput = (e) => {
    setToDo(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, toDo]);
    setToDo("");
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const updateTask = () => {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex justify-center items-center rounded-md mx-auto mt-12 bg-blue-300 py-2 w-3/4">
        <input
          type="text"
          value={toDo}
          onChange={settingInput}
          placeholder="Write a task..."
          className="rounded py-2 ml-2 bg-blue-300 font-semibold w-full  focus:outline-none"
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
          <div key={index} className="flex justify-between items-center rounded-md bg-blue-300 py-2 my-3 w-full shadow-xl">
            {editIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                className="ml-4 rounded py-1 px-2 bg-blue-100 focus:outline-none"
              />
            ) : (
              <div className="ml-4">{task}</div>
            )}
            <div className="mr-4 ">
              {editIndex === index ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={updateTask}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
