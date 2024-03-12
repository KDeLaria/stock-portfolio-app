import React, { useState, useEffect } from "react";
import axios from "axios";
import fallbackData from "../../seeds/top-gainers-losers-seed.json";


const Trending = ({ onButtonClick }) => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.API_KEY
      const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response.data);

        setTopGainers(response.data["top_gainers"].slice(0, 2));
        setTopLosers(response.data["top_losers"].slice(0, 2));
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setTopGainers(fallbackData.top_gainers.slice(0, 2));
        setTopLosers(fallbackData.top_losers.slice(0, 2));
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    const clickText = e.target.querySelector('span').innerText;
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {stock.change_percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
