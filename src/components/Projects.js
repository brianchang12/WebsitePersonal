import React from "react";

const Projects = () => {
  return (
    <div className="big-format">
      <hr />
      <h2>Projects</h2>
      <hr />
      <div className="main-col">
        <span className="work-project-heading">
          <h4 className="list-heading">
            Personal Website (Aug 2021 - Sept 2021):
          </h4>
        </span>
        <ul className="list-content">
          <li>Used CSS to Style React elements.</li>
          <li>Implemented React Router to allow for page routing.</li>
          <li>Skills: HTML, CSS, JavaScript, React JS, Node JS</li>
        </ul>
        <div className="btn-format" style={{ marginTop: "1.5em" }}>
          <button>Visit Project on GitHub</button>
        </div>
        <span className="work-project-heading">
          <h4 className="list-heading">
            Self-Playing Snake (Apr 2021 - May 2021):
          </h4>
        </span>
        <ul className="list-content">
          <li>Implemented frontend of the game with Pygame.</li>
          <li>
            Used NumPy and PyTorch to manipulate data and implement
            reinforcement Deep Q learning.
          </li>
          <li>Skills: Python, Pygame, NumPy, PyTorch</li>
        </ul>
        <div className="btn-format" style={{ marginTop: "1.5em" }}>
          <button>Visit Project on GitHub</button>
        </div>
        <span className="work-project-heading">
          <h4 className="list-heading">Asciify (Mar 2021 - Apr 2021):</h4>
        </span>
        <ul className="list-content">
          <li>
            Created a Flutter application that converts photos on a smart phone
            into ASCII photos.
          </li>
          <li>
            Created ASCII photo by mapping ASCII characters to the pixels of an
            image based on grayscale value.
          </li>
          <li>
            Used Image Picker plugin to access device’s camera and gallery.
          </li>
          <li>Used Image Cropper plugin to allow photos to be cropped.</li>
          <li>Implemented both unit and widget tests.</li>
          <li>Skills: Flutter, Dart, App development</li>
        </ul>
        <div className="btn-format" style={{ marginTop: "1.5em" }}>
          <button>Visit Project on GitHub</button>
        </div>
        <span className="work-project-heading">
          <h4 className="list-heading">
            Tic-Tac-Toe Game App (Apr 2020 - May 2020):
          </h4>
        </span>
        <ul className="list-content">
          <li>
            Built an Android application that allows users to play a game of
            tic-tac-toe.
          </li>
          <li>Used Android Studio’s layout editor to create GUI.</li>
          <li>Implemented starting animations using AlphaAnimation.</li>
          <li>Skills: Java, App development, Android Studio</li>
        </ul>
        <div className="btn-format" style={{ marginTop: "1.5em" }}>
          <button>Visit Project on GitHub</button>
        </div>
        <span className="work-project-heading">
          <h4 className="list-heading">To-Do-List (Sept 2019 - Dec 2019):</h4>
        </span>
        <ul className="list-content">
          <li>
            Built a To-Do-List application to allow users to track tasks and
            courses.
          </li>
          <li>Designed a GUI with Java Swing package. </li>
          <li>Implemented JUnit testing.</li>
          <li>Skills: Java, JUnit testing, Swing</li>
        </ul>
        <div className="btn-format" style={{ marginTop: "1.5em" }}>
          <button>Visit Project on GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
