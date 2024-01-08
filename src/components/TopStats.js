import React from "react";
import players from "../APIandDATA/playersData.js";

export default function TopStats() {
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
