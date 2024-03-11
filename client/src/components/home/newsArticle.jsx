import React, { useState, useEffect } from "react";
import axios from "axios";
import newsData from "../../seeds/news-seed.json"; // Ensure the path is correct

const NewsArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  const [secondArticle, setSecondArticle] = useState(null); // State for the second article

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "NEWS_SENTIMENT",
            tickers: "", // Specify tickers here
            apikey: process.env.API_KEY //"YOUR_API_KEY", // Replace with your API key
          },
        });

        if (
          response.data &&
          response.data.feed &&
          response.data.feed.length > 0
        ) {
          setTopArticle(response.data.feed[0]);
        } else {
          console.error("No articles found in the response");
          // Fallback to local JSON data for the first column
          setTopArticle(
            newsData.feed[Math.floor(Math.random() * newsData.feed.length)]
          );
          // Fallback to local JSON data for the second column
          setSecondArticle(
            newsData.feed[Math.floor(Math.random() * newsData.feed.length)]
          );
        }
      } catch (error) {
        console.error(
          "Error fetching news article or API limit reached:",
          error
        );
        // Fallback to local JSON data on error for both columns, ensuring different articles
        const firstIndex = Math.floor(Math.random() * newsData.feed.length);
        let secondIndex;
        do {
          secondIndex = Math.floor(Math.random() * newsData.feed.length);
        } while (secondIndex === firstIndex); // Ensure a different article for the second column

        setTopArticle(newsData.feed[firstIndex]);
        setSecondArticle(newsData.feed[secondIndex]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {topArticle ? (
        <article className="relative mx-3 border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          {/* Image */}
          <img
            src={topArticle.banner_image}
            alt="News"
            className="rounded-lg w-full"
          />
          {/* Opaque overlay container with hover effect and responsive adjustments */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 md:p-3 lg:p-4 rounded-b-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-md md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">
              {topArticle.title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-white truncate">
              {topArticle.summary}
            </p>
            <a
              href={topArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xs md:text-sm"
            >
              Read more
            </a>
          </div>
        </article>
      ) : (
        <p>Loading article...</p>
      )}

      {secondArticle ? (
        <article className="relative mx-3 border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          {/* Image */}
          <img
            src={secondArticle.banner_image}
            alt="News"
            className="rounded-lg w-full"
          />
          {/* Opaque overlay container with hover effect and responsive adjustments */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 md:p-3 lg:p-4 rounded-b-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-md md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">
              {secondArticle.title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-white truncate">
              {secondArticle.summary}
            </p>
            <a
              href={secondArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xs md:text-sm"
            >
              Read more
            </a>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default NewsArticle;
