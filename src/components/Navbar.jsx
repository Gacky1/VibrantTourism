import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name) => {
    // Only for mobile click, desktop uses hover
    if (window.innerWidth <= 768) {
      setDropdownOpen(prev => ({ ...prev, [name]: !prev[name] }));
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          
          <li className="nav-item dropdown" 
              onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, about: true}))} 
              onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, about: false}))}
              onClick={() => toggleDropdown('about')}
          >
            <span className="nav-link">About Us <FaChevronDown /></span>
            <ul className={`dropdown-menu ${dropdownOpen['about'] ? 'show' : ''}`}>
              <li><Link to="/about/team" onClick={() => setIsOpen(false)}>Our Team</Link></li>
              <li><Link to="/about/general-body" onClick={() => setIsOpen(false)}>General Body</Link></li>
              <li><Link to="/about/vision" onClick={() => setIsOpen(false)}>Vision & Mission</Link></li>
              <li><Link to="/about/stakeholders" onClick={() => setIsOpen(false)}>Stakeholders</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, partners: true}))} 
              onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, partners: false}))}
              onClick={() => toggleDropdown('partners')}
          >
            <span className="nav-link">Our Partners <FaChevronDown /></span>
            <ul className={`dropdown-menu ${dropdownOpen['partners'] ? 'show' : ''}`}>
              <li><Link to="/partners/industry" onClick={() => setIsOpen(false)}>Industry Partners</Link></li>
              <li><Link to="/partners/training" onClick={() => setIsOpen(false)}>Training Partners</Link></li>
            </ul>
          </li>

          <li className="nav-item"><Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link></li>
          <li className="nav-item"><Link to="/media" onClick={() => setIsOpen(false)}>Media Center</Link></li>
          <li className="nav-item"><Link to="/demand" onClick={() => setIsOpen(false)}>Demand Aggregation</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
