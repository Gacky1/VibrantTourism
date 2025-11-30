import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;
