import React from "react";
import "./css/sidebar.css";
import SidebarOptions from "./sidebarOptions";
import { VscHome, VscLibrary } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { useDataLayerValue } from "./DataLayer";
import PlayListNames from "./playListNames.js";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" icon={<VscHome size={22} />} />
      <SidebarOptions title="Search" icon={<AiOutlineSearch size={22} />} />
      <SidebarOptions title="Your Library" icon={<VscLibrary size={22} />} />

      <br />
      <strong className="playlistTitle">PLAYLISTS</strong>
      <hr />
      <div className="playlists">
        {playlists.map((playlist) => (
          <PlayListNames title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
