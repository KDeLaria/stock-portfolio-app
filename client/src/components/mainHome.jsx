import React from 'react';
import Header from '../components/header';
import NewsArticle from '../components/newsArticle';
import Trendline from '../components/Trendline';
import Portfolio from '../components/portfolio';
import Trending from '../components/trending';
import Footer from './footer';


const HomePage = () => {
  const loggedIn = false; // Replace with actual login check

  return (
    <div className="">
      <Header />
      <div className="bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Investor Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <NewsArticle />
          {/* ... other sections like NewsImage/Link ... */}
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-4 m-2">
          <Trendline />
          <Portfolio loggedIn={loggedIn} />
          
        </div>
        <Trending />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;