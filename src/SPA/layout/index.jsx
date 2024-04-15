import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
      navigate('/signin'); // Redirect to sign-in page if not authenticated
    }
  }, [navigate]); // Add navigate as a dependency

  // If not authenticated, nothing will be rendered until the redirect happens
  if (!localStorage.getItem('token')) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
