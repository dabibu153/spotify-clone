import React from "react";
import "./css/sidebarOptions.css";

function SidebarOptions(props) {
  return (
    <div className="options">
      <div className="optionIcon">{props.icon}</div>
      <div className="optionText">{props.title}</div>
    </div>
  );
}

export default SidebarOptions;
