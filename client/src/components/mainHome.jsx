import React from 'react';
import Header from '../components/header';
import NewsArticle from '../components/newsArticle';
import Portfolio from '../components/portfolio';
import Trending from '../components/trending';

const HomePage = () => {
  const loggedIn = false; // Replace with actual login check

  return (
    <div className="">
      <Header />
      {/* Removed padding to allow the white background to extend to the edges */}
      <div className="bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Investor Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <NewsArticle />
          {/* ... other sections like NewsImage/Link ... */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Portfolio loggedIn={loggedIn} />
          {/* ... other sections like Actions ... */}
        </div>
        <Trending />
      </div>
    </div>
  );
};

export default HomePage;