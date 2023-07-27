import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" className="social__icon">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" className="social__icon">
        <BsGithub />
      </a>
      <a href="https://twitter.com" target="_blank" className="social__icon">
        <BsTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" className="social__icon">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
