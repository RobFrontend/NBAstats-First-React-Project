import React from "react";

export default function Players({ playerObj }) {
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
