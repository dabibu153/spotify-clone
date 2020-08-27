import React from "react";
import "./css/body_content.css";
import MainHeader from "./mainHeader.js";
import { useDataLayerValue } from "./DataLayer";
import { AiFillPlayCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import SongRow from "./songRow.js";

function Content({ spotify }) {
  const [{ user, playlists, currentPlaylist }, dispatch] = useDataLayerValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

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
      <div className="songList">
        <div className="topIcons">
          <AiFillPlayCircle className="AiFillPlayCircle" />
          <BsThreeDots className="BsThreeDots" size={30} />
        </div>
        <div className="singListHead">
          <div className="index">#</div>
          <div className="trackName">TITLE</div>
          <div className="albumName">ALBUM</div>
          <div className="date">DATE ADDED</div>
          <div className="length">
            <AiOutlineClockCircle />
          </div>
        </div>
        <hr />
        {currentPlaylist?.tracks.items.map((song, index) => (
          <SongRow track={song} index={index} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Content;
