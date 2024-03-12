import React, { useState, useEffect } from "react";
import Trendline from "../components/home/Trendline";
import TrendlineHelper from "../components/portfolio/TrendlineHelper";
import Header from "../components/home/header";

function Portfolio() {
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