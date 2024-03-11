import React, { useState, useEffect } from "react";
import Trendline from "../components/home/Trendline";
import TrendlineHelper from "../components/portfolio/TrendlineHelper";

function Portfolio() {
  const portfolioArr = ["TSLA", "AAPL", "F", "AMD", "MSFT", "WBD", "HPE", "T", "GOOG", "CMCSA", "PYPL"];
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