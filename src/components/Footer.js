import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="icon-tray">
        <a href="https://github.com/personalbrian">
          <FaGithub className="icon" />
        </a>

        <a href="https://www.linkedin.com/in/lichengchang/">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
