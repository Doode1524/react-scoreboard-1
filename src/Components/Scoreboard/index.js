import React from "react";
import "./index.css";

const ScoreBoard = () => {
  return (
    <div className="scoreboard-wrapper">
      <div className="scoreboard-header"></div>
      <div className="scoreboard-container">
        <div className="scoreboard-sidebanner"></div>
          <div className="team-container">
            <div className="team-names">
              <div className="team-name"></div>
              <div className="team-name"></div>
            </div>
            <div className="teams-score">
              <div className="team-score"></div>
              <div className="team-score"></div>
            </div>
            <div className="shots-container">
              <div className="team-shots"></div>
              <div className="shots-title"></div>
              <div className="team-shots"></div>
            </div>
          </div>
        <div className="scoreboard-sidebanner"></div>
      </div>
    </div>
  );
};

export default ScoreBoard;
