import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/Photo.png";
import HeaderSocials from "./HeaderSocials";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Sairam Nulakani</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
