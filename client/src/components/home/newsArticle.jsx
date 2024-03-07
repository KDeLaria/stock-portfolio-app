import React from "react";

const NewsArticle = () => {
  return (
    <>
      <article className="border p-4 rounded-lg shadow mx-3">
        <h3 className="text-xl font-bold mb-2">Headline</h3>
        <p className="mb-4">Body text goes here...</p>
        {/* Add an image thumbnail */}
        <img src="path-to-image.jpg" alt="News" className="rounded-lg mb-4" />
        {/* ... other content ... */}
      </article>

      <article className="border p-4 rounded-lg shadow mx-3">
        <h3 className="text-xl font-bold mb-2">News Link</h3>
        <p className="mb-4">Body text goes here...</p>
        {/* Add an image thumbnail */}
        <img src="path-to-image.jpg" alt="News" className="rounded-lg mb-4" />
        {/* ... other content ... */}
      </article>
    </>
  );
};

export default NewsArticle;
