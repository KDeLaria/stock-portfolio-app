import React from 'react';
import {useAuth} from "../../utils/Auth";

const Portfolio = (props) => {
  const {loggedIn} = useAuth();
  let stocks;

  if (props.portfolioArr) {
  stocks = props.portfolioArr.map((item) => (
    <li key={item}>
      {item}
    </li>
  ));
  }

  return (
    <div>
      {loggedIn ? (
        <>
          <p className="font-semibold mb-4">Your portfolio trendline</p>
          <div className="h-40 bg-gray-200 rounded-lg mb-4">
            <ul className="py-2">
              {stocks}
            </ul>
          </div>
          <a href="/portfolio">
            <button className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
              View Breakdown
            </button>
          </a>
        </>
      ) : (
        <p className="py-2">Sign in to see portfolio</p>
      )}
    </div>
  );
};

export default Portfolio;