import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom' // Import Outlet



function AppLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default AppLayout