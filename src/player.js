import React from "react";
import "./css/player.css";
import Sidebar from "./sidebar.js";
import Content from "./body_content.js";
import Footer from "./footer.js";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Content spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
