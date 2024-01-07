import React, { useState, useEffect } from "react";

const News = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  const nbaArticles = async () => {
    const url = "https://nba-latest-news.p.rapidapi.com/articles";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7338b50c76msh813222d99478f7ep148723jsnc8fa9eecb415",
        "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      return data.slice(0, 10).map(({ title, source, url: link }) => ({
        title,
        source,
        link,
      }));
    } catch (err) {
      console.log(err);
      return [];
    }
  };

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
            className="article-btns"
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
};

export default News;
