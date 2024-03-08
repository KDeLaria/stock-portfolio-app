import React, { useState, useEffect } from "react";
import axios from "axios";
import newsData from "../../seeds/news-seed.json"; // Ensure the path is correct

const NewsArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  const [secondArticle, setSecondArticle] = useState(null); // State for the second article

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'NEWS_SENTIMENT',
            tickers: '', // Specify tickers here
            apikey: 'YOUR_API_KEY' // Replace with your API key
          }
        });

        if (response.data && response.data.feed && response.data.feed.length > 0) {
          setTopArticle(response.data.feed[0]);
        } else {
          console.error("No articles found in the response");
          // Fallback to local JSON data for the first column
          setTopArticle(newsData.feed[Math.floor(Math.random() * newsData.feed.length)]);
          // Fallback to local JSON data for the second column
          setSecondArticle(newsData.feed[Math.floor(Math.random() * newsData.feed.length)]);
        }
      } catch (error) {
        console.error("Error fetching news article or API limit reached:", error);
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
        <article className="border p-4 rounded-lg shadow mx-3">
          {/* Column 1: Text content */}
          <div className="pr-4 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">{topArticle.title}</h3>
            <p className="">{topArticle.summary}</p>
          </div>

          {/* Column 1: Image and link */}
          <img src={topArticle.banner_image} alt="News" className="rounded-lg mb-4" />
          <a href={topArticle.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Read more</a>
        </article>
      ) : (
        <p>Loading article...</p>
      )}

      {secondArticle ? (
        <article className="border p-4 rounded-lg shadow mx-3">
          {/* Column 2: Text content */}
          <div className="pr-4 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-2">{secondArticle.title}</h3>
            <p className="">{secondArticle.summary}</p>
          </div>

          {/* Column 2: Image and link */}
          <img src={secondArticle.banner_image} alt="News" className="rounded-lg mb-4" />
          <a href={secondArticle.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Read more</a>
        </article>
      ) : null}
    </>
  );
};

export default NewsArticle;