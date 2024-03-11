import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useAuth} from "../../utils/Auth";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const {loggedIn, logout, name}  = useAuth();

  
  // Function to handle login button click
  const handleLoginClick = () => {
    if (loggedIn) {
      logout();
    }
    else{
    navigate('/login'); // Navigate to the login page
  }
  };

  // Function to navigate back home when WOLF.IO is clicked
  const navigateHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <header className="flex justify-between items-center mb-2 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-5xl font-extrabold" onClick={navigateHome} style={{cursor: 'pointer'}}>WOLF.IO</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/search" className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">Search</Link></li>
          <li><Link to="/portfolio" className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">Portfolio</Link></li>
        </ul>
      </nav>
      {loggedIn && (<span>Welcome {name},</span>)}
      <button 
        className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
        onClick={handleLoginClick}
      >
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;

