import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-56 bg-slate-800 h-screen z-50">
      <ul className="flex flex-col gap-4 capitalize text-lg font-bold hover:cursor-pointer text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
