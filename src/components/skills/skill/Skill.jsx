import React from "react";
import "./skill.css";

const Skill = ({ img, text }) => {
  return (
    <div className="skill-container">
      <div className="skill-image">{img}</div>
      <div className="skill-name">{text}</div>
    </div>
  );
};

export default Skill;
