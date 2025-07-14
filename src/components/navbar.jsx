import React from 'react';
import '../styles/Navbar.css'; // Make sure this path is correct
import logo from "../assets/svg/logo.svg"
import hamburger from "../assets/svg/hamburger.svg"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a className="icon"><img className="logo-img" src={logo} alt="logo" /></a>
        </div>
      </div>

      <nav className="nav-links">
        <div className="nav-item dropdown">
          Services <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="#">Social media marketing (SMM)</a>
            <a href="#">Community Management</a>
            <a href="#">PR (Public Relations)</a>
            <a href="#">Influencer Marketing</a>
            <a href="#">Paid advertising (PPC)</a>
            <a href="#">SEO promotion</a>
            <a href="#">Website development</a>
          </div>
        </div>

        <div className="nav-item dropdown">
          Industries <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="#">ICO marketing</a>
            <a href="#">IDO marketing</a>
            <a href="#">IEO marketing</a>
            <a href="#">DeFi marketing</a>
            <a href="#">NFT marketing</a>
            <a href="#">GameFi marketing</a>
            <a href="#">Crypto Exchange</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#">Cases</a>
        </div>

        <div className="nav-item dropdown">
          Company <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="#">Blog</a>
          </div>
        </div>

        <div className="nav-item">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="navbar-right">
        <button className="contact-btn">Contact us</button>
        <img className="navicon" src={hamburger} alt="hamburger" />
      </div>
    </header>
  );
};

export default Navbar;
