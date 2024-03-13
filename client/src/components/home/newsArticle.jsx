import React from "react";
import newsData from "../../seeds/news-seed.json";
import "../../css/newsArticles.css";

const NewsArticle = () => {

  const getRandomArticle = () => {
    const articles = newsData.feed;
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  };
  
  const topArticle = getRandomArticle();
  const secondArticle = getRandomArticle();

  return (
    <>
      {topArticle && (
        <article className="article">
          <img src={topArticle.banner_image} alt="News" className="articleImage" />
          <div className="overlayContainer">
            <h3 className="articleTitle">{topArticle.title}</h3>
            <p className="articleSummary">{topArticle.summary}</p>
            <a href={topArticle.url} target="_blank" rel="noopener noreferrer" className="readMoreLink">Read more</a>
          </div>
        </article>
      )}

      {secondArticle && (
        <article className="article">
          <img src={secondArticle.banner_image} alt="News" className="articleImage" />
          <div className="overlayContainer">
            <h3 className="articleTitle">{secondArticle.title}</h3>
            <p className="articleSummary">{secondArticle.summary}</p>
            <a href={secondArticle.url} target="_blank" rel="noopener noreferrer" className="readMoreLink">Read more</a>
          </div>
        </article>
      )}
    </>
  );
};

export default NewsArticle;