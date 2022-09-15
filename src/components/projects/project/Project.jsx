import React from "react";
import "./project.css";

const Project = ({ name, img, text, link, page, icon, icon2 }) => {
  return (
    <div className="project-wrapper">
      <div className="project-container">
        <h5 className="project-name">{name}</h5>
        <div className="project-img">
          <img src={img} alt="project" />
        </div>
        <p className="project-info">{text}</p>
        <div className="project-link">
          <a className="link" href={page}>
            {icon2}
            <div>PAGE</div>
          </a>
          <a className="link" href={link}>
            {icon}
            <div>SOURCE</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
