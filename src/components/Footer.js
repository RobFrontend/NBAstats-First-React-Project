import React from "react";

export default function Footer() {
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
