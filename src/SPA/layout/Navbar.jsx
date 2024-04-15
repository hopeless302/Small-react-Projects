// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-slate-500 text-white flex justify-between">
      <div className="space-x-5 p-5">Logo</div>
      <ul className="flex space-x-10 p-5">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
