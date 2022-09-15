import React from "react";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  return (
    <nav className="header_container">
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        Contacts
      </Link>
    </nav>
  );
};

export default Header;
