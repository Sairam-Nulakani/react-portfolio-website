import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <nav>
      <Link
        to="/home"
        onClick={() => setActiveLink("home")}
        className={activeLink === "home" ? "active" : ""}
      >
        <a>
          <AiOutlineHome />
        </a>
      </Link>
      <Link
        to="/home/about"
        onClick={() => setActiveLink("about")}
        className={activeLink === "about" ? "active" : ""}
      >
        <a>
          <AiOutlineUser />
        </a>
      </Link>
      <Link to="/home/experience">
        <a
          onClick={() => setActiveLink("/experience")}
          className={activeLink === "/experience" ? "active" : ""}
        >
          <BiBook />
        </a>
      </Link>
      <Link to="/home/portfolio">
        <a
          onClick={() => setActiveLink("/portfolio")}
          className={activeLink === "/portfolio" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      </Link>
      <Link to="/home/contact">
        <a
          onClick={() => setActiveLink("/contact")}
          className={activeLink === "/contact" ? "active" : ""}
        >
          <AiOutlineContacts />
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
