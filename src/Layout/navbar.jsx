import React, { useState } from "react";

// logo home my progress contact us userImage
const Navbar = (props) => {
  return (
    <div className="flex w-full items-center justify-between h-16 px-4 bg-sky-500">
      <img alt="logo" src="/logo.jpg" width={30} height={30} />
      <div className="flex items-center justify-center gap-2">
        <img
          alt="user-image"
          src="/logo192.png"
          className="h-8 w-8 rounded-full bg-rose-800 p-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
