import React from "react";

export default function ToDoBox() {
  return (
    <>
      <div className="flex justify-center justify-between items-center rounded-md mx-auto mt-12 bg-blue-300 py-2 w-3/4 ">
        <div id="Task">
          <input
            type="text"
            placeholder="   Write a task..."
            className="flex rounded py-2 ml-2 bg-blue-300 font-semibold	 "
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => {
            AddTask;
          }}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 w-3/4 mx-auto">
        <h2 className="font-bold mb-4">Your ToDo Lists</h2>
        <div id="My-Todo" className="flex justify-between items-center rounded-md bg-blue-300 py-2 w-full shadow-xl">
          <div id="Text" className="ml-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          </div>
          <div id="btn" className="mr-4">
            <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}