import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
    <img src ="images/jurassic-park-logo.png" height="200" alt="logo"/>
    <h2 class="tagline"> Life finds a way... </h2>
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
    <Link to="/staff">Staff</Link>
    </li>
    </ul>
    </header>
  )
}

export default NavBar;
