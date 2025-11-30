import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, display: 'none' },
    open: { opacity: 1, y: 0, display: 'block', transition: { duration: 0.2 } }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Desktop Menu */}
        <ul className={`nav-menu desktop-menu`}>
          <li className="nav-item"><Link to="/">Home</Link></li>
          
          <li className="nav-item dropdown" 
              onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, about: true}))} 
              onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, about: false}))}
          >
            <span className="nav-link">About Us <FaChevronDown /></span>
            <AnimatePresence>
              {dropdownOpen['about'] && (
                <motion.ul 
                  className="dropdown-menu"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <li><Link to="/about/team">Our Team</Link></li>
                  <li><Link to="/about/general-body">General Body</Link></li>
                  <li><Link to="/about/vision">Vision & Mission</Link></li>
                  <li><Link to="/about/stakeholders">Stakeholders</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="nav-item dropdown"
              onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, partners: true}))} 
              onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(prev => ({...prev, partners: false}))}
          >
            <span className="nav-link">Our Partners <FaChevronDown /></span>
            <AnimatePresence>
              {dropdownOpen['partners'] && (
                <motion.ul 
                  className="dropdown-menu"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <li><Link to="/partners/industry">Industry Partners</Link></li>
                  <li><Link to="/partners/training">Training Partners</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="nav-item"><Link to="/services">Our Services</Link></li>
          <li className="nav-item"><Link to="/media">Media Center</Link></li>
          <li className="nav-item"><Link to="/demand">Demand Aggregation</Link></li>
          <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              className="nav-menu mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <li className="nav-item"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              
              <li className="nav-item dropdown" onClick={() => toggleDropdown('about')}>
                <span className="nav-link">About Us <FaChevronDown /></span>
                {dropdownOpen['about'] && (
                  <ul className="dropdown-menu show-mobile">
                    <li><Link to="/about/team" onClick={() => setIsOpen(false)}>Our Team</Link></li>
                    <li><Link to="/about/general-body" onClick={() => setIsOpen(false)}>General Body</Link></li>
                    <li><Link to="/about/vision" onClick={() => setIsOpen(false)}>Vision & Mission</Link></li>
                    <li><Link to="/about/stakeholders" onClick={() => setIsOpen(false)}>Stakeholders</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item dropdown" onClick={() => toggleDropdown('partners')}>
                <span className="nav-link">Our Partners <FaChevronDown /></span>
                {dropdownOpen['partners'] && (
                  <ul className="dropdown-menu show-mobile">
                    <li><Link to="/partners/industry" onClick={() => setIsOpen(false)}>Industry Partners</Link></li>
                    <li><Link to="/partners/training" onClick={() => setIsOpen(false)}>Training Partners</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-item"><Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link></li>
              <li className="nav-item"><Link to="/media" onClick={() => setIsOpen(false)}>Media Center</Link></li>
              <li className="nav-item"><Link to="/demand" onClick={() => setIsOpen(false)}>Demand Aggregation</Link></li>
              <li className="nav-item"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
