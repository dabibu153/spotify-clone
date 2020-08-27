import React, { useState, useEffect } from "react";
import "./css/songRow.css";
import { BsFillPlayFill } from "react-icons/bs";

function SongRow(props) {
  const [isAlbum, setisAlbum] = useState(false);
  const [songLen, setsongLen] = useState(null);
  const [button, setbutton] = useState(false);

  useEffect(() => {
    setsongLen(props.track.track.duration_ms);
    if (props.track.track.album.album_type === "single") {
      setisAlbum(false);
    } else {
      setisAlbum(true);
    }
  }, []);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div
      className="songData"
      onMouseOver={() => setbutton(true)}
      onMouseOut={() => setbutton(false)}
    >
      <div className="singListHead1">
        <div className="index">
          {button ? (
            <BsFillPlayFill className="playButton1" />
          ) : (
            props.index + 1
          )}
        </div>

        <div className="trackName">
          <img src={props.track.track.album.images[0].url} alt="" />
          <div className="songinfo1">
            <div className="songinfo1Name">{props.track.track.name}</div>
            <div className="songinfo1Artist">
              {props.track.track.artists[0].name}
            </div>
          </div>
        </div>
        <div className="albumName">
          {isAlbum ? props.track.track.album.name : "single"}
        </div>
        <div className="date">{props.track.added_at.substr(0, 10)}</div>
        <div className="length">{millisToMinutesAndSeconds(songLen)}</div>
      </div>
    </div>
  );
}

export default SongRow;
