// src/components/Navbar.jsx
import React from 'react';
import Hamburger from './Hamburger';
import LanguageSelector from './LanguageSelector';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Hamburger/>
        <div className="logo">Groove</div>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
