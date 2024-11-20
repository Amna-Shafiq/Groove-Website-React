import React, { useState } from 'react';
import '../styles/Hamburger.css';
import LanguageSelector from './LanguageSelector';
import logo from '../../assets/PHOTO-2021-06-16-18-42-19_copy_2@2x.png';


const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language,setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (language) => {
    setLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="hamburger-menu">
      {!isOpen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
      {isOpen && (
          <div id="hamburgerIconClose" onClick={toggleMenu}>
        <i className="fa-solid fa-xmark"></i>
    </div>
       
      )}     
      <div className={`hamburger-content ${isOpen ? 'active' : ''}`}>
      <div className="logo-container">
    <img src={logo} alt="Logo" className="hamburger-logo" />
  </div>
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
        <button className="css-btn">Log in</button>
        <LanguageSelector
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
        selectLanguage={selectLanguage}
        language={language}
      />
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
