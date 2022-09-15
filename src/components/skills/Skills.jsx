import React from "react";
import Skill from "./skill/Skill";
import { mySkills } from "../../data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-left">
          <h3 className="section-title">About me</h3>
          <div className="skills-info">
            I'm self-tought programmer with great motivation to learn and grow
            in web developing. I like build quality responsive websites, user
            interfaces and interactive web apps. Highly organized, responsible
            person
          </div>
        </div>
        <div className="skills-right">
          <h3 className="section-title">Skills</h3>
          <div className="skill-wrapper">
            {mySkills.map((el) => (
              <Skill key={el.id} img={el.img} text={el.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
