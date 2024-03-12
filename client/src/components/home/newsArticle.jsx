import React, { useState, useEffect } from "react";
import axios from "axios";
import newsData from "../../seeds/news-seed.json";
import "../../css/newsArticles.css";

const NewsArticle = () => {
  const [topArticle, setTopArticle] = useState(null);
  const [secondArticle, setSecondArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "NEWS_SENTIMENT",
            tickers: "", // Specify tickers here
            apikey: process.env.API_KEY 
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
          fallbackToRandomJsonData();
        }
      } catch (error) {
        console.error(
          "Error fetching news article or API limit reached:",
          error
        );
        fallbackToRandomJsonData();
      }
    };

    fetchData();
  }, []);

  const fallbackToRandomJsonData = () => {
    const shuffledArticles = newsData.feed.sort(() => 0.5 - Math.random());
    setTopArticle(shuffledArticles[0]);
    setSecondArticle(shuffledArticles[1]);
  };

  return (
    <>
      {topArticle ? (
        <article className="article">
          <img src={topArticle.banner_image} alt="News" className="articleImage" />
          <div className="overlayContainer">
            <h3 className="articleTitle">{topArticle.title}</h3>
            <p className="articleSummary">{topArticle.summary}</p>
            <a href={topArticle.url} target="_blank" rel="noopener noreferrer" className="readMoreLink">Read more</a>
          </div>
        </article>
      ) : (
        <p>Loading article...</p>
      )}

      {secondArticle ? (
        <article className="article">
          <img src={secondArticle.banner_image} alt="News" className="articleImage" />
          <div className="overlayContainer">
            <h3 className="articleTitle">{secondArticle.title}</h3>
            <p className="articleSummary">{secondArticle.summary}</p>
            <a href={secondArticle.url} target="_blank" rel="noopener noreferrer" className="readMoreLink">Read more</a>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default NewsArticle;