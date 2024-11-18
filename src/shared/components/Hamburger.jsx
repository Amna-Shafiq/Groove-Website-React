import React, { useState } from 'react';
import '../styles/Hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
      {!isOpen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Close Icon */}
      {isOpen && (
        <div className="hamburger-icon-close" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}

      {/* Hamburger Content */}
      <div className={`hamburger-content ${isOpen ? 'active' : ''}`}>
        <nav className="nav-links">
          <ul>
            <li><a href="#dine">Dine With Us</a></li>
            <li><a href="#visit">Plan Your Visit</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#map">View Grooves Map</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        <div className="social-media">
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x"></i></a>
          <a href="#"><i className="fa-brands fa-snapchat-ghost"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
