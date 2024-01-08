import React from "react";
import players from "../APIandDATA/playersData.js";
import TopStats from "./TopStats.js";
import Players from "./Players.js";

export default function Article() {
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
