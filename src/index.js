import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import players from "./playersData.js";
import News from "./api.js";

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

function Header() {
  return <h1>NBA Players Stats</h1>;
}

function Article() {
  const playersData = players;
  return (
    <div className="container">
      <h2>Chicago Bulls</h2>
      <div className="players-boxes">
        {playersData.map((player) => (
          <Players playerObj={player} key={player.name} />
        ))}
      </div>
      <TopStats players={players} />
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
