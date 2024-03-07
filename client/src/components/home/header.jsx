import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

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
        Login/Logout
      </button>
    </header>
  );
};

export default Header;

