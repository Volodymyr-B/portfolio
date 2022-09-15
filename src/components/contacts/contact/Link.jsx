import React from "react";
import "./link.css";

const Link = ({ img, name, link }) => {
  return (
    <div className="link-container">
      <div>
        <a href={link}>{img}</a>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Link;
