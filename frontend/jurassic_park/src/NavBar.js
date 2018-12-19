import React from 'react';
import {Link} from 'react-router-dom';
import './main.css';
// import '/index.css';

const NavBar = (props) => {
  return (
    <header className="topNav">
    <h2 className="tagline"> Life finds a way . . . </h2>
    <h2 className="visitor-count">Current Visitors : 2 , 6 4 5 </h2>
    <div>
    <a href="http://localhost:3000/">
    <img src ={require("./images/jurassic-park-logo.png")} height="200" alt="logo" className="center"/>
    </a>
    </div>
    <ul>
    <li className="navLink">
    <Link to="/dinosaurs">Dinosaurs</Link>
    </li>
    <li className="navLink">
    <Link to="/paddocks">Paddocks</Link>
    </li>
    <li className="navLink">
    <Link to="/visitors">Visitors</Link>
    </li>
    <li className="navLink">
    <Link to="/employees">Staff</Link>
    </li>
    </ul>
    <div className="line-break"></div>
    </header>


  )
}

export default NavBar;
