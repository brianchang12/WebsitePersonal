import React from "react";

const WorkExperience = () => {
  return (
    <div className="big-format">
      <hr />
      <h2>Work Experience</h2>
      <hr />
      <div className="main-col">
        <ul>
          <li className="list-heading">
            Junior Auxiliary Lifeguard (Jan 2018 - Sept 2021):
          </li>
          <ul className="list-content">
            <li>
              Guarded at various swimming facilities in the city of Richmond.
            </li>
            <li>Cleaned and maintained the facilities.</li>
            <li>Worked in teams to ensure the safety of all patrons.</li>
            <li>Taught students swimming to Canadian Red Cross standards.</li>
          </ul>
          <div style={{margin: '10vh auto'}}></div>
          <li className="list-heading">
            Network Support Analyst (Sept 2020 - April 2021):
          </li>
          <ul className="list-content">
            <li>
              Used Cisco’s pyATS framework to create a Python script to extract
              command outputs from physical layer network devices.
            </li>
            <li>
              Worked with Python Requests and Patch Manager’s API to extract
              device and cable structure of buildings inside the UBC campus for
              Network Management Centre’s network automation tool.
            </li>
            <li>
              Deployed, documented, and wrote Python scripts for an Oxidized
              server to back up configurations of physical layer lab network
              devices. Also added SSL certificate to the Oxidized server.
            </li>
            <li>
              Wrote a research paper evaluating Oxidized against RANCID in
              context to the needs of the Network Management Centre.
            </li>
            <li>Cleaned probes on Intermapper maps.</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
