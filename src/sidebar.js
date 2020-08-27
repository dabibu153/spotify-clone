import React from "react";
import "./css/sidebar.css";
import SidebarOptions from "./sidebarOptions";
import { VscHome, VscLibrary } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { useDataLayerValue } from "./DataLayer";
import PlayListNames from "./playListNames.js";

function Sidebar({ spotify }) {
  const [{ playlists, currentPlaylist }, dispatch] = useDataLayerValue();

  const handleHome = () => {
    spotify.getPlaylist("37i9dQZEVXcSbjF3uzk6mC").then((res) => {
      console.log("requested playlist", res);
      dispatch({ type: "SET_DISCOVER", playlist: res });
    });
  };

  const handlePlaylist = (e) => {
    console.log(e);
    spotify.getPlaylist(e).then((res) => {
      console.log("requested playlist", res);
      dispatch({ type: "SET_DISCOVER", playlist: res });
    });
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div onClick={() => handleHome()}>
        <SidebarOptions title="Home" icon={<VscHome size={22} />} />
      </div>
      <SidebarOptions title="Search" icon={<AiOutlineSearch size={22} />} />
      <SidebarOptions title="Your Library" icon={<VscLibrary size={22} />} />

      <br />
      <strong className="playlistTitle">PLAYLISTS</strong>
      <hr />
      <div className="playlists">
        {playlists.map((playlist) => (
          <div onClick={() => handlePlaylist(playlist.id)}>
            <PlayListNames title={playlist.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
