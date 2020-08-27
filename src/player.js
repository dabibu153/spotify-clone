import React from "react";
import "./css/player.css";
import Sidebar from "./sidebar.js";
import Content from "./body_content.js";
import Footer from "./footer.js";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar spotify={spotify} />
        <Content spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
