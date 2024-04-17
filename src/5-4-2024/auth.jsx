import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const AuthRequired = () => {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/auth/signin" state={{ from: location }} />
    }
  return ( <Outlet />
  )
}

export default AuthRequired