import React, { useState, useEffect } from "react";
import Trendline from "../components/home/Trendline";
import TrendlineHelper from "../components/portfolio/TrendlineHelper";

function Portfolio() {
  const portfolioArr = ["TSLA", "AAPL", "F"];
  const [trendlineProps, setTrendlineProps] = useState({ portfolioArr: [] });

  const handleButtonClick = (symbol) => {
    if (symbol === "Portfolio") {
      setTrendlineProps({ portfolioArr });
    } else {
      setTrendlineProps({ symbol });
    }
  };

  return (
    <>
      <div>
        <Trendline {...trendlineProps} />
        <TrendlineHelper onButtonClick={handleButtonClick} />
      </div>
    </>
  );
}

export default Portfolio;
