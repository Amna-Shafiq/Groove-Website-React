import React, { useState } from 'react';
import './styles/HomePage.css';
import logo from "../assets/PHOTO-2021-06-16-18-42-19_copy_2@2x.png";
import LanguageSelector from '../shared/components/LanguageSelector';
import '../shared/styles/LanguageSelector.css';
import Hamburger from '../shared/components/Hamburger';



const HomePage = ({ scrollToSection }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (language) => {
    setLanguage(language);
    setDropdownOpen(false);
  };
  return(
  <section id="hero" className="section">
    <header id="header">
      <div className="top-bar">
        <div className="logo">
          <img src={logo}/>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-tiktok "></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x"></i></a>
          <a href="#"><i className="fa-brands fa-snapchat-ghost"></i></a>
        </div>
        <button className="css-btn">Log in</button>
        <LanguageSelector
        dropdownOpen={dropdownOpen}
        toggleDropdown={toggleDropdown}
        selectLanguage={selectLanguage}
        language={language}
      />
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="#Mall" onClick={scrollToSection}>Dine With Us</a></li>
          <li><a href="#book-tickets" onClick={scrollToSection} >Plan Your Visit</a></li>
          <li><a href="#finest-cuisine" onClick={scrollToSection}>Events</a></li>
          <li><a href="#" onClick={scrollToSection}>View Grooves Map</a></li>
          <li><a href="#" onClick={scrollToSection}>Our Story</a></li>
          <li><a href="#" onClick={scrollToSection}>Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <Hamburger className="hamburger-menu" />

    <div className="hero-body">
      <p>Khawaja Yanni</p>
      <h1>The new <br /> era of luxury</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry.</p>
      <button className="reservation-btn css-btn">
        Book reservation now <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  </section>
);
}

export default HomePage;
