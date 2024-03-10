import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../utils/Auth";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const Auth  = useAuth();
  
  // Function to handle login button click
  const handleLoginClick = () => {
    if (Auth.props.value.loggedIn) {
      Auth.props.value.logout();
    }
    else{
    navigate('/login'); // Navigate to the login page
  }
  };
console.log(Auth)
  return (
    <header className="flex justify-between items-center mb-2 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-5xl font-extrabold">WOLF.IO</h1>
      <nav>
        {/* Add navigation links if needed */}
      </nav>
      <button 
        className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
        onClick={handleLoginClick} // Add the click handler here
      >    
        {Auth.props.value.loggedIn ? (<span>Logout</span>) : (<span>Login</span>)}
      </button>
      {/* {Auth.props.value.loggedIn && (<span>| Welcome {Auth.props.name},</span>)} */}
    </header>
  );
};

export default Header;

