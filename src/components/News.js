import React, { useState, useEffect } from "react";
import nbaArticles from "../APIandDATA/api.js";

export default function News() {
  const [articlesData, setArticlesData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await nbaArticles();
        setArticlesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectArticle = (index) => {
    setSelectedArticleIndex(index);
  };

  return (
    <div className="articles">
      <div className="article-btn-box">
        <h3>News:</h3>

        {articlesData.map((_, i) => (
          <button
            className={
              i === selectedArticleIndex
                ? "article-btns active"
                : "article-btns"
            }
            key={i}
            onClick={() => handleSelectArticle(i)}
          >
            #{i + 1}
          </button>
        ))}
      </div>
      {articlesData.length > 0 && (
        <div key={selectedArticleIndex} className="article-box">
          <h2>{articlesData[selectedArticleIndex].title}</h2>
          <div className="article-source">
            <p>Source:</p>
            <p className="source">
              {articlesData[selectedArticleIndex].source.toUpperCase()}
            </p>
            <a
              href={articlesData[selectedArticleIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
