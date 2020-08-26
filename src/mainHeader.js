import React from "react";
import "./css/mainHeader.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function MainHeader() {
  const [{ user, playlists, currentPlaylist }, dispatch] = useDataLayerValue();
  return (
    <div className="playerBlock">
      <div className="header">
        <div className="headerLeft">
          <AiOutlineSearch size={32} />
          <input type="text" placeholder="search for songs"></input>
        </div>
        <div className="headerRight">
          <Avatar src={user?.images[0]?.url} />
          <div className="userName">{user?.display_name}</div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
