import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className=" sticky top-0  bg-blue-300 text-white flex justify-between">
        <div className=" space-x-5 p-5  font-serif font-bold">ToDo</div>
        <ul className=" flex space-x-10 p-5  mr-8  ">
          <li className="cursor-pointer ">
            <a className="hover:font-semibold transition-all" href="#">Home</a>
          </li>
          <li>
            <a className="hover:font-semibold transition-all" href="#">about us</a>
          </li>
          <li>
            <a className="hover:font-semibold transition-all" href="#"> contact us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
