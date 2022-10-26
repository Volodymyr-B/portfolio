import React from "react";
import Project from "./project/Project";
import { myProjects } from "../../data";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h3 className="section-title">My Works</h3>
      <div className="projects-container">
        {myProjects.map((el) => (
          <Project key={el.id} project={el} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
