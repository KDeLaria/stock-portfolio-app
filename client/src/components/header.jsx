import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-2 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-5xl font-extrabold">WOLF.IO</h1>
      <nav>
        {/* Add navigation links if needed */}
      </nav>
      <button className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">
        Login/Logout
      </button>
    </header>
  );
};

export default Header;

