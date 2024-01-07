import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./queries.css";
import players from "./playersData.js";
import nbaArticles from "./api.js";

function App() {
  return (
    <>
      <News />
      <section className="section-article">
        <Header />
        <Article />
      </section>
      <Footer />
    </>
  );
}

//

const News = () => {
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
};
//

function Header() {
  return <h1>NBA Players Stats</h1>;
}

function Article() {
  const playersData = players;
  return (
    <div className="container">
      <h2>Chicago Bulls</h2>
      <TopStats players={players} />
      <div className="players-boxes">
        {playersData.map((player) => (
          <Players playerObj={player} key={player.name} />
        ))}
      </div>
    </div>
  );
}

function Players({ playerObj }) {
  return (
    <div className="player-box">
      <div className="player-img-box">
        <img src={playerObj.photoName} alt={playerObj.name} />
      </div>
      <div className="player-stats-box">
        <p className="player-name player-stats">{playerObj.name}</p>
        <p className="player-position">Position: {playerObj.position}</p>
        <p className="player-stats">PPG: {playerObj.ppg}</p>
        <p className="player-stats">RPG: {playerObj.rpg}</p>
        <p className="player-stats">APG: {playerObj.apg}</p>
      </div>
    </div>
  );
}

function TopStats() {
  const topPPG = players.map((player) => player.ppg).sort((a, b) => b - a)[0];
  function getBestPlayerPPG(top) {
    return players.find((player) => player.ppg === top);
  }
  const bestPlayerPPG = getBestPlayerPPG(topPPG);

  const topRPG = players.map((player) => player.rpg).sort((a, b) => b - a)[0];
  function getBestPlayerRPG(top) {
    return players.find((player) => player.rpg === top);
  }
  const bestPlayerRPG = getBestPlayerRPG(topRPG);

  const topAPG = players.map((player) => player.apg).sort((a, b) => b - a)[0];
  function getBestPlayerAPG(top) {
    return players.find((player) => player.apg === top);
  }
  const bestPlayerAPG = getBestPlayerAPG(topAPG);

  return (
    <div className="top-stats-box">
      <p>
        Most PPG:{" "}
        <span>
          {topPPG} - {bestPlayerPPG.name}
        </span>
      </p>
      <p>
        Most RPG:{" "}
        <span>
          {topRPG} - {bestPlayerRPG.name}
        </span>
      </p>
      <p>
        Most APG:{" "}
        <span>
          {topAPG} - {bestPlayerAPG.name}
        </span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Pictures and stats from{" "}
        <a
          href="https://www.nba.com/stats/players/traditional?PerMode=Totals&sort=PTS&dir=-1&TeamID=1610612741"
          target="blank"
        >
          nba.com
        </a>{" "}
        (05.01.2024).
      </p>
      <p className="copy">&copy; {new Date().getFullYear()} robfrontend</p>
    </footer>
  );
}

// RENDERING ROOT & STRICT MODE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
