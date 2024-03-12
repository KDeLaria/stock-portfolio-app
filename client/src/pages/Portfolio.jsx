import React, { useState, useEffect } from "react";
import Trendline from "../components/home/Trendline";
import TrendlineHelper from "../components/portfolio/TrendlineHelper";
import Header from "../components/home/header";
import { useAuth } from "../utils/Auth";

function Portfolio() {
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
    <>
    <Header />
      <div className="flex">
        <div className="flex-initial w-2/3">
          <Trendline {...trendlineProps} />
        </div>
        <div className="flex-initial w-1/3">
          <TrendlineHelper portfolioArr={portfolioArr} onButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default Portfolio;