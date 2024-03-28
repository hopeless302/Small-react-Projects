import React from "react";

export default function ToDoList({AddTask}) {
  return (
    <div className="flex justify-center items-center justify-between rounded-md ml-8 mb-5  bg-blue-300 py-2 px-4 w-3/4 h-20			">
      <div id="Task">
      <input
        type="text"
        placeholder="Write a task..."
        className="flex-1 rounded-md py-2 px-4 bg-blue-300" 
      />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {AddTask}}
      >
        Add
      </button>
    </div>
  );
}
