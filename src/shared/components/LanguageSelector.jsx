import React from 'react';
import EnglishFlag from "../../assets/Mask Group 450@2x.png";
import SpainFlag from '../../assets/spain-flag.png';
import PakistanFlag from '../../assets/Flag_of_Pakistan.svg.png';
import '../styles/LanguageSelector.css';

const LanguageSelector = ({ dropdownOpen, toggleDropdown, selectLanguage, language }) => {
    console.log("dropdownOpen check",dropdownOpen);
    const flags = {
        English: EnglishFlag,
        Español: SpainFlag,
        Urdu: PakistanFlag,
      };
  return (
    <div className="language-switch">
      <div className="language-select" onClick={toggleDropdown}>
        <i className="fa-solid fa-angle-down"></i>
        <img src={flags[language]} alt={`${language} Flag`} className="selected-language-icon" />
        <span className="selected-language">{language}</span>
      </div>
      {dropdownOpen && (
        <div className="language-options" style={{ display: 'block' }}>
          <div className="language-option" onClick={() => selectLanguage('English')}>
            <img src={EnglishFlag} alt="English Flag" className="language-icon" />
            <span>English</span>
          </div>
          <div className="language-option" onClick={() => selectLanguage('Español')}>
            <img src={SpainFlag} alt="Spanish Flag" className="language-icon" />
            <span>Español</span>
          </div>
          <div className="language-option" onClick={() => selectLanguage('Urdu')}>
            <img src={PakistanFlag} alt="Pakistani Flag" className="language-icon" />
            <span>Urdu</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
