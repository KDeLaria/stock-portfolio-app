import React, { useState, useEffect } from "react";
import axios from "axios";
import fallbackData from "../../seeds/top-gainers-losers-seed.json";

const Trending = ({ onButtonClick }) => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "process.env.API_KEY"
      const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;
  
      try {
        const response = await axios.get(url);
        console.log(response.data); // Inspect the actual structure
  
        // Hypothetical adjustment based on the actual API response structure
        if (response.data && response.data.result && response.data.result.top_gainers && response.data.result.top_losers) {
          setTopGainers(response.data.result.top_gainers.slice(0, 2));
          setTopLosers(response.data.result.top_losers.slice(0, 2));
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (error) {
        console.error("Error fetching stock data or invalid structure:", error);
        // Fallback to local data
        setTopGainers(fallbackData.top_gainers.slice(0, 2));
        setTopLosers(fallbackData.top_losers.slice(0, 2));
      }
    };
  
    fetchData();
  }, []);

  const handleClick = (e) => {
    // Ensure the click handler logic correctly targets the element you expect
    // This might need adjustment based on your actual markup and event target
    const clickText = e.target.closest('div').querySelector('span').innerText;
    console.log(clickText);
    onButtonClick(clickText);
  };

  return (
    <section className="border-t pt-4 mb-5 px-4">
      <div className="text-xl font-bold mb-4">
        <h3>Trending</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topGainers.map((stock, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300" 
            onClick={handleClick}
          >
            <span className="font-bold text-lg">{stock.ticker}</span>
            <div className="flex items-center text-green-600">
              {/* SVG and change_percentage display */}
              {stock.change_percentage}
            </div>
          </div>
        ))}
        {topLosers.map((stock, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">{stock.ticker}</span>
            <div className="flex items-center text-red-600">
              {/* SVG and change_percentage display */}
              {stock.change_percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;