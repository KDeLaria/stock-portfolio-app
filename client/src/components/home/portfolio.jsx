import React from 'react';
import {useAuth} from "../../utils/Auth";

const Portfolio = () => {
  const {loggedIn} = useAuth();
  return (
    <div className="">
      {loggedIn ? (
        <>
          <p className="font-semibold mb-4">Your portfolio trendline</p>
          {/* Replace with an actual graph component */}
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
            View Breakdown
          </button>
        </>
      ) : (
        <p>Sign in to see portfolio</p>
      )}
    </div>
  );
};

export default Portfolio;