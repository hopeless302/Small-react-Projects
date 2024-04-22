import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
