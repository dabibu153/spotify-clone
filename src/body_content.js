import React from "react";
import "./css/body_content.css";
import MainHeader from "./mainHeader.js";
import { useDataLayerValue } from "./DataLayer";

function Content({ spotify }) {
  const [{ user, playlists, currentPlaylist }, dispatch] = useDataLayerValue();
  return (
    <div className="body_content">
      <MainHeader spotify={spotify} />
      <div className="banner">
        <img src={currentPlaylist?.images[0].url} alt="" />
        <div className="text">
          <strong>PLAYLIST</strong>
          <h1>{currentPlaylist?.name}</h1>
          <p>{currentPlaylist?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
