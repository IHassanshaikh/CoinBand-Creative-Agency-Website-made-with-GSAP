import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/svg/logo.svg";
import hamburger from "../assets/svg/hamburger.svg";
import closeIcon from "../assets/close.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a href='/' className="icon"><img className="logo-img" src={logo} alt="logo" /></a>
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Mobile Close Button */}
        <img 
          src={closeIcon} 
          alt="Close menu" 
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
        />

        <div className="nav-item dropdown">
          Services <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="./Service" onClick={() => setMenuOpen(false)}>Social media marketing (SMM)</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Community Management</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>PR (Public Relations)</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Influencer Marketing</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Paid advertising (PPC)</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>SEO promotion</a>
            <a href="./Service" onClick={() => setMenuOpen(false)}>Website development</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#" onClick={(e) => handleClick(e, 'industries-section')}>Industries</a>
        </div>

        <div className="nav-item">
          <a href="#" onClick={(e) => handleClick(e, 'cases-section')}>Cases</a>
        </div>

        <div className="nav-item dropdown">
          Company <span className="arrow">▼</span>
          <div className="dropdown-menu">
            <a href="#" onClick={(e) => handleClick(e, 'blog-section')}>Blog</a>
          </div>
        </div>

        <div className="nav-item">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      <div className="navbar-right">
        <button className="contact-btn">Contact us</button>
        <img
          className="navicon"
          src={hamburger}
          alt="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        />
      </div>
    </header>
  );
};

export default Navbar;