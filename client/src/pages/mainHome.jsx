import React, { useState, useEffect } from "react";
import Header from '../components/home/header';
import NewsArticle from '../components/home/newsArticle';
import Trendline from '../components/home/Trendline';
import Portfolio from '../components/home/portfolio';
import Trending from '../components/home/trending';
import Footer from '../components/home/footer';
import { useAuth } from "../utils/Auth";


const HomePage = () => {
  let portfolioArr = [];
  const { user_id } = useAuth();

  async function getPortfolio() {
    try {
      const query = await fetch(`/api/user/${user_id}`)
      const result = await query.json()
      if (result.status === "success") {
        portfolioArr = result.payload.portfolio.map(stock => stock.ticker);
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  // const portfolioArr = ["TSLA", "AAPL", "F", "AMD", "MSFT", "WBD", "HPE", "T", "GOOG", "CMCSA", "PYPL"];
  const [trendlineProps, setTrendlineProps] = useState({ portfolioArr });

  const handleButtonClick = (symbol) => {
    if (symbol === "Portfolio") {
      setTrendlineProps({ portfolioArr });
    } else {
      setTrendlineProps({ symbol });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="bg-white">
        <h2 className="text-2xl font-semibold mb-4">Investor Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <NewsArticle />
          {/* ... other sections like NewsImage/Link ... */}
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-4 m-2">
          <Trendline {...trendlineProps} />
          <Portfolio />
          
        </div>
        <Trending onButtonClick={handleButtonClick} />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;