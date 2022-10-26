import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import cafe from "./assets/cafe.jpg";
import game from "./assets/wordle.jpg";
import kanban from "./assets/kanban.jpg";

export const mySkills = [
  { id: 1, img: <SiHtml5 size={70} />, text: "HTML5" },
  { id: 2, img: <SiCss3 size={70} />, text: "CSS3" },
  { id: 3, img: <SiJavascript size={70} />, text: "JavaScript" },
  { id: 4, img: <SiReact size={70} />, text: "React JS" },
  { id: 5, img: <SiRedux size={70} />, text: "React-Redux" },
  { id: 6, img: <FaGithub size={70} />, text: "GitHub" },
  { id: 7, img: <SiTypescript size={70} />, text: "TypeScript" },
  { id: 8, img: <SiTailwindcss size={70} />, text: "TailWind" },
];

export const myProjects = [
  {
    id: 1,
    name: "Cafe Street",
    img: cafe,
    text: "E-commerce website with a fully working trading system, a shopping cart, adding goods, placing an order, mail, checking validation",
    link: "https://github.com/Volodymyr-B/E-commerceSite",
    page: "https://volodymyr-b.github.io/E-commerceSite/",
    icon: <FaGithub />,
    icon2: <FiExternalLink />,
  },
  {
    id: 2,
    name: "Word Game",
    img: game,
    text: "Clone of the well-known Wordle game. This fun application includes fully working logic, keyboard input, color recognition and animation",
    link: "https://github.com/Volodymyr-B/wordle",
    page: "https://volodymyr-b.github.io/wordle/",
    icon: <FaGithub />,
    icon2: <FiExternalLink />,
  },
  {
    id: 3,
    name: "Kanban Board",
    img: kanban,
    text: "This application is visualizer of issues from GitHub repositories with drag-n-drop functionality and saving repository position between sessions",
    link: "https://github.com/Volodymyr-B/kanban",
    page: "https://volodymyr-b.github.io/kanban/",
    icon: <FaGithub />,
    icon2: <FiExternalLink />,
  },
];
export const myContacts = [
  {
    id: 1,
    name: "GitHub",
    img: <FaGithub size={70} />,
    link: "https://github.com/Volodymyr-B",
  },
  {
    id: 2,
    name: "Telegram",
    img: <BsTelegram size={70} />,
    link: "https://t.me/BabychVolodymyr",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: <BsLinkedin size={70} />,
    link: "https://linkedin.com/in/владимир-бабич-5aa76324b",
  },
];
