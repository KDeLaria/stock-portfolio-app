import React from 'react';

const Portfolio = ({ loggedIn }) => {
  return (
    <div className="md:col-span-2 border p-4 rounded">
      {loggedIn ? (
        <p>Your portfolio trendline</p>
      ) : (
        <p>Sign in to see portfolio</p>
      )}
    </div>
  );
};

export default Portfolio;