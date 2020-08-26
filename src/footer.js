import React from "react";
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

function Footer() {
  return (
    <div className="player_footer">
      <div className="songDetails">song details</div>
      <div className="pps">
        <BiShuffle size={22} style={{ paddingTop: "4px" }} />
        <BiSkipPrevious size={30} />
        <AiFillPlayCircle size={32} />
        <BiSkipNext size={30} />
        <MdRepeat size={22} style={{ paddingTop: "4px" }} />
      </div>
      <div className="sound">
        <MdQueueMusic size={18} />
        <HiOutlineDesktopComputer size={18} />
        <AiTwotoneSound size={18} />
        <Slider style={{ width: "100px", color: "green" }} />
      </div>
    </div>
  );
}

export default Footer;
