import React from "react";
import "./css/player.css";
import Sidebar from "./sidebar.js";
import Body from "./body.js";

function Player() {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default Player;
