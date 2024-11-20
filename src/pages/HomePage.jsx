import React, { useState } from 'react';
import './styles/HomePage.css';
import logo from "../assets/PHOTO-2021-06-16-18-42-19_copy_2@2x.png";
import LanguageSelector from '../shared/components/LanguageSelector';
import '../shared/styles/LanguageSelector.css';
import Hamburger from '../shared/components/Hamburger';
import Rectangle from '../assets/Rectangle 18780.png';



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
    <header id="header" style={{
          position: "relative",
          zIndex:2}}>
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

      <nav className="nav-container" >
        <ul className="nav-list">
          <li><a href="#mall" onClick={scrollToSection}>Dine With Us</a></li>
          <li><a href="#book-tickets" onClick={scrollToSection} >Plan Your Visit</a></li>
          <li><a href="#finest-cuisine" onClick={scrollToSection}>Events</a></li>
          <li><a href="#map" onClick={scrollToSection}>View Grooves Map</a></li>
          <li><a href="#experience" onClick={scrollToSection}>Our Story</a></li>
          <li><a href="#contact-us" onClick={scrollToSection}>Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <Hamburger className="hamburger-menu" />

    <div className="hero-body" style={{
          position: "relative",
          zIndex:2}}>
      <p>Khawaja Yanni</p>
      <h1>The new <br /> era of luxury</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry.</p>
      <button className="reservation-btn css-btn">
        Book reservation now <i className="fa fa-arrow-right"></i>
      </button>
    </div>
    <img className="rectangle-box"
        src={Rectangle}
        alt="Background Rectangle"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          maxHeight: "110%",
          zIndex: 0,
        }}
      />
  </section>
);
}

export default HomePage;
