import React from "react";
import fallbackData from "../../seeds/top-gainers-losers-seed.json";

const Trending = ({ onButtonClick }) => {
  // use data from the JSON file
  const topGainers = fallbackData.top_gainers.slice(0, 2);
  const topLosers = fallbackData.top_losers.slice(0, 2); 

  const handleClick = (e) => {
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
              {stock.change_percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;