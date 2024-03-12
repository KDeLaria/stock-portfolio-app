import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../utils/Auth";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { loggedIn, logout, name } = useAuth();

  // Function to handle login button click
  const handleLoginClick = () => {
    if (loggedIn) {
      logout();
    } else {
      navigate("/login"); // Navigate to the login page
    }
  };

  // Function to navigate back home when WOLF.IO is clicked
  const navigateHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <header className="flex flex-wrap justify-between mb-2 p-2 md:p-4">
      <div className="flex items-center flex-wrap">
        <h1 className="text-3xl md:text-5xl font-extrabold mr-2 md:mr-4" onClick={navigateHome} style={{cursor: 'pointer'}}>WOLF.IO</h1>
        {loggedIn && (<nav>
          <ul className="flex space-x-2 md:space-x-4">
            <li>
              <Link
                to="/search"
                className="py-2 px-3 md:py-3 md:px-6 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="py-2 px-3 md:py-3 md:px-6 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>)}
      </div>
      <div className="mt-2 md:mt-0">
        {loggedIn && <span className="mr-2 md:mr-4">Welcome {name},</span>}
        <button
          className="py-2 px-3 md:py-3 md:px-6 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
          onClick={handleLoginClick}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Header;
