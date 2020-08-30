import React, { useEffect } from "react";
import "./css/footer.css";
import {
  AiOutlineHeart,
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiTwotoneSound,
} from "react-icons/ai";
import { MdPictureInPictureAlt, MdQueueMusic, MdRepeat } from "react-icons/md";
import { BiShuffle, BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { Slider } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
  const [{ playing, item }, dispatch] = useDataLayerValue();

  const handleSkipNext = () => {
    spotify.skipToNext().then((res) => {
      spotify
        .getMyCurrentPlayingTrack()
        .then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        })
        .catch((ree1) => {
          console.log("currentplaying track error", ree1);
        });
    });
  };

  const handlePauseSong = () => {
    spotify.pause();
    dispatch({ type: "SET_PLAYING", playing: false });
  };

  const handlePlaySong = () => {
    spotify.play();
    dispatch({ type: "SET_PLAYING", playing: true });
  };

  return (
    <div className="player_footer">
      <div className="songDetails">
        <img src={item?.album.images[0].url} alt="" />
        <div className="song">
          <div className="songName">{item?.name}</div>
          <div className="artistName">{item?.artists[0].name}</div>
        </div>
        <AiOutlineHeart size={22} />
        <MdPictureInPictureAlt size={22} />
      </div>
      <div className="pps">
        <BiShuffle size={22} style={{ paddingTop: "4px" }} />
        <BiSkipPrevious size={30} />
        {playing ? (
          <AiFillPauseCircle size={32} onClick={handlePauseSong} />
        ) : (
          <AiFillPlayCircle size={32} onClick={handlePlaySong} />
        )}
        <BiSkipNext size={30} onClick={handleSkipNext} />
        <MdRepeat size={22} style={{ paddingTop: "4px" }} />
      </div>
      <div className="sound">
        <MdQueueMusic size={18} />
        <HiOutlineDesktopComputer size={18} />
        <AiTwotoneSound size={18} />
        <Slider style={{ width: "100px", color: "#1DB954" }} />
      </div>
    </div>
  );
}

export default Footer;
