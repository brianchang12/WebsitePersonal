import React from 'react';
import Logo from '../img/ubc-logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Navbar = () => {
    return (
        <div className="container">
            <img  src={Logo} alt="UBC-logo" className="logo"/>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                    <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                    <Link to="/work-experiences">Work Experiences</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
