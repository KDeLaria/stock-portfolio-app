import React from 'react';
import Header from '../components/home/header';
import NewsArticle from '../components/home/newsArticle';
import Trendline from '../components/home/Trendline';
import Portfolio from '../components/home/portfolio';
import Trending from '../components/home/trending';
import Footer from '../components/home/footer';
import useAuth from "../utils/Auth";


const HomePage = () => {

  const Auth = useAuth();

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
          {Auth.props.value.loggedIn && (<Portfolio />)}
          
        </div>
        <Trending />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;