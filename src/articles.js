import React, { useState, useEffect } from "react";
import "./index.css";

const News = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0); // Default index 0

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

      return data.map(({ title, source, url: link }) => ({
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
    <section className="articles">
      <div>
        {articlesData.length > 0 && (
          <div key={0}>
            <h3>{articlesData[0].title}</h3>
            <p>Source: {articlesData[0].source.toUpperCase()}</p>
            <a
              href={articlesData[0].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={1}>
            <h3>{articlesData[1].title}</h3>
            <p>Source: {articlesData[1].source.toUpperCase()}</p>
            <a
              href={articlesData[1].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={2}>
            <h3>{articlesData[2].title}</h3>
            <p>Source: {articlesData[2].source.toUpperCase()}</p>
            <a
              href={articlesData[2].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={3}>
            <h3>{articlesData[3].title}</h3>
            <p>Source: {articlesData[3].source.toUpperCase()}</p>
            <a
              href={articlesData[3].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={4}>
            <h3>{articlesData[4].title}</h3>
            <p>Source: {articlesData[4].source.toUpperCase()}</p>
            <a
              href={articlesData[4].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={5}>
            <h3>{articlesData[5].title}</h3>
            <p>Source: {articlesData[5].source.toUpperCase()}</p>
            <a
              href={articlesData[5].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={6}>
            <h3>{articlesData[6].title}</h3>
            <p>Source: {articlesData[6].source.toUpperCase()}</p>
            <a
              href={articlesData[6].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
      <div>
        {articlesData.length > 0 && (
          <div key={7}>
            <h3>{articlesData[7].title}</h3>
            <p>Source: {articlesData[7].source.toUpperCase()}</p>
            <a
              href={articlesData[7].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
