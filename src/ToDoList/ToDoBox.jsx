import React from "react";

export default function ToDoBox() {
  return(
    <div className="flex justify-center justify-between items-center rounded-md mx-auto mt-12  bg-blue-300 py-2 w-3/4		">
      <div id="Task">
      <input
        type="text"
        placeholder="Write a task..."
        className="flex-1 rounded-md py-2 px-4 bg-blue-300 font-semibold" 
      />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8"
        onClick={() => {AddTask}}
      >
        Add
      </button>
    </div>
  ) 
};
