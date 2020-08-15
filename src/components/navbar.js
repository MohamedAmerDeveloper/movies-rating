import React from 'react';
import logo from '../assets/movies-icon.ico';
import './navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navBar ">

<nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">

  <img src={logo}/>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ml-5">
        <Link exact="true" to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item ml-5">
        <Link to="/trending" className="nav-link">trending movies</Link>
      </li>
      <li className="nav-item ml-5">
        <Link to="/topRate" className="nav-link">high rate</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navbar;