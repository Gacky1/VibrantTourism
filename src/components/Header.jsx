import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaAdjust, FaFont } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  const increaseFont = () => {
    if (fontSize < 1.5) {
      const newSize = fontSize + 0.1;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize * 100}%`;
    }
  };

  const resetFont = () => {
    setFontSize(1);
    document.documentElement.style.fontSize = '100%';
  };

  return (
    <header className="header">
      <div className="news-ticker">
        <div className="ticker-content">
          <span>📢 Admission open for 2025 batch! | 🏆 Vibrant Tourism awarded Best Skill Development Center | 🤝 New partnership with Taj Hotels announced.</span>
        </div>
      </div>
      <div className="header-main container">
        <div className="logo">
          <h1>Vibrant Tourism</h1>
        </div>
        <div className="header-actions">
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button><FaSearch /></button>
          </div>
          <div className="accessibility-tools">
            <button onClick={toggleContrast} title="Toggle High Contrast"><FaAdjust /></button>
            <button onClick={increaseFont} title="Increase Font Size"><FaFont />+</button>
            <button onClick={resetFont} title="Reset Font Size"><FaFont /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
