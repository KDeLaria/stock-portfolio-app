import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fallbackData from '../../seeds/top-gainers-losers-seed.json'; // Ensure the path is correct

const Trending = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'API KEY'; // Replace with your API key
      const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response.data);
        // Assuming the API returns an object with 'top_gainers' and 'top_losers' properties
        setTopGainers(response.data['top_gainers'].slice(0, 2));
        setTopLosers(response.data['top_losers'].slice(0, 2));
      } catch (error) {
        console.error('Error fetching stock data:', error);
        // Fallback to local JSON data on error or API limit reached
        setTopGainers(fallbackData.top_gainers.slice(0, 2));
        setTopLosers(fallbackData.top_losers.slice(0, 2));
      }
    };

    fetchData();
  }, []);// This effect runs once on mount

  return (
    <section className="border-t pt-4 mb-5 px-4">
      <h3 className="text-xl font-bold mb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Display top gainers */}
        {topGainers.map((stock, index) => (
          <div key={index} className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold text-lg">{stock.ticker}</span>
            <div className="flex items-center text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
              {stock.change_percentage}
            </div>
          </div>
        ))}
        {/* Display top losers */}
        {topLosers.map((stock, index) => (
          <div key={index} className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <span className="font-bold text-lg">{stock.ticker}</span>
            <div className="flex items-center text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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