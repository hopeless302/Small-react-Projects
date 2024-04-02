import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className=" sticky top-0 bg-slate-500 text-white flex justify-between ">
        <div className=" space-x-5 p-5 ">Logo</div>
        <ul className=" flex space-x-10 p-5 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">about us</a>
          </li>
          <li>
            <a href=""> contact us</a>
          </li>
        </ul>
      </nav>
      <div className=" flex " >
        <p>Home</p>
        <p>about us</p>
        <p>Contact us</p>
      </div>
    </>
  );
}
