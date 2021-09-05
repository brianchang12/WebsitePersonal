import React from "react";
import Self from "../img/personal-pic.jpg";
import AboutMeContent from "./AboutMeContent";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-format">
      <hr />
        <h2>About Me</h2>
        <hr />
        <img src={Self} alt="Self" className="side-photo" />
        <div className="main-col">
          <p>
            Welcome to my personal web page! I am a third year Computer Science
            student studying at the University of British Columbia (Vancouver).
            Along with my years of post-secondary education, I have worked as a
            network support analyst on a previous co-operative experience and
            have completed various personal projects in languages such as Java,
            Python, Dart, and more. I am currently seeking opportunities to work
            in a software developer role.
          </p>
          <p>
            Reach out to <span>Linkedin</span> to contact me!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
