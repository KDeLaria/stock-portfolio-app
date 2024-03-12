import React, { useState, useEffect } from "react";
import Header from '../components/home/header';
import NewsArticle from '../components/home/newsArticle';
import Trendline from '../components/home/Trendline';
import Portfolio from '../components/home/portfolio';
import Trending from '../components/home/trending';
import Footer from '../components/home/footer';
import { useAuth } from "../utils/Auth";

const HomePage = () => {
  const { user_id } = useAuth();
  const [portfolioArr, setPortfolioArr] = useState([]);
  const [trendlineProps, setTrendlineProps] = useState({ portfolioArr });
  const url = `/api/user/${user_id}`

  async function getPortfolio() {
    try {
      const query = await fetch(url);
      console.log(query);
      const result = await query.json();
      if (result.status === "success") {
        console.log("Status is OK")
        const tickers = result.payload.portfolio.map(stock => stock.ticker);
        console.log(tickers);
        setPortfolioArr(tickers);
        setTrendlineProps({ portfolioArr: tickers });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getPortfolio();
  }, []);

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