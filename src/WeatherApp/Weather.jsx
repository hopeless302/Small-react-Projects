import React from "react";

export default function Weather() {
  return (
    <div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Country Name:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
    </div>
  );
}
