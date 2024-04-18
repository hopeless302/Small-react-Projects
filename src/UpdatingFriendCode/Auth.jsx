// AuthRequired.js
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const AuthRequired = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">You need to sign in to access this page.</p>
            <NavLink to="/auth/signin" className="text-blue-500 hover:text-blue-700">
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthRequired;
