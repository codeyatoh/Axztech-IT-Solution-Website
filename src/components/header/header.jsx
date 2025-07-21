import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../assets/images/axztech-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked (for mobile)
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Axztech IT Solutions" className={styles.logo} />
          <span className={styles.logoText}>Axztech IT Solutions</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" end className={({ isActive }) => `${styles.navLink}${isActive ? ' ' + styles.active : ''}`} onClick={handleNavClick}>Home</NavLink>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink} onClick={handleNavClick}>About Us</a>
            </li>
            <li className={styles.navItem}>
              <a href="#products" className={styles.navLink} onClick={handleNavClick}>Products</a>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/contact" className={({ isActive }) => `${styles.navLink}${isActive ? ' ' + styles.active : ''}`} onClick={handleNavClick}>Contact Us</NavLink>
            </li>
          </ul>
          <button className={styles.ctaButton}>Get Started</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;