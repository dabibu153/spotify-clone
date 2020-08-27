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

  return (
    <div className="player_footer">
      <div className="songDetails">
        <img
          src="https://i.pinimg.com/originals/3e/19/32/3e1932324b40fabbda27fa8b90f2c28f.jpg"
          alt=""
        />
        <div className="song">
          <div className="songName">Do Gunna</div>
          <div className="artistName">Seedhe Maut</div>
        </div>
        <AiOutlineHeart size={22} />
        <MdPictureInPictureAlt size={22} />
      </div>
      <div className="pps">
        <BiShuffle size={22} style={{ paddingTop: "4px" }} />
        <BiSkipPrevious size={30} />
        {playing ? (
          <AiFillPauseCircle size={32} />
        ) : (
          <AiFillPlayCircle size={32} />
        )}
        <BiSkipNext size={30} />
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
