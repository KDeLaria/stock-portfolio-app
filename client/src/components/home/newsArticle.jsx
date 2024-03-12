import React, { useState, useEffect } from "react";
import newsData from "../../seeds/news-seed.json";
import "../../css/newsArticles.css";

const NewsArticle = () => {
  const [articles, setArticles] = useState([]);
  
// make sure to get two different random articles
  useEffect(() => {
    const getRandomArticles = () => {
      const feed = newsData.feed;
      let indices = new Set();
      while (indices.size < 2) {
        const randomIndex = Math.floor(Math.random() * feed.length);
        indices.add(randomIndex);
      }
      return [...indices].map(index => feed[index]);
    };

    setArticles(getRandomArticles());
  }, []);

  return (
    <>
      {articles.map((article, index) => (
        <article key={index} className="article">
          <img src={article.banner_image} alt="News" className="articleImage" />
          <div className="overlayContainer">
            <h3 className="articleTitle">{article.title}</h3>
            <p className="articleSummary">{article.summary}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="readMoreLink">Read more</a>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewsArticle;