import React from "react";
import "./intro.css";
import photo from "../../assets/Photo.jpg";

const Intro = () => {
  return (
    <section className="intro_container">
      <div className="intro_left">
        <div className="intro_text">
          <h1>Hi, i'm Babych Volodymyr,</h1>
          and i'm:
          <div className="animation">
            <div className="animation-wrapper">
              <div className="animation-item">Web Developer</div>
              <div className="animation-item">Content Creator</div>
              <div className="animation-item">Front-End Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro_right">
        <div className="intro-bg"></div>
        <div className="main-photo">
          <img src={photo} alt="Main_photo" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
