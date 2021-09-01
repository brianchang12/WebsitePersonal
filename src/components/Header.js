import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="header">
      <div className="background-img">
        <div className="content">
          <h1>Brian Chang</h1>
          <h3>
            Third Year Computer Science (BSc) The University of British Columbia
          </h3>
          <div className="icon-tray">
            <a href="https://github.com/personalbrian">
              <FaGithub className="header-icon" />
            </a>
            
            <a href="https://www.linkedin.com/in/lichengchang/">
              <FaLinkedin className="header-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
