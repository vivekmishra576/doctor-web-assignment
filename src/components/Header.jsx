import React from 'react';
import './Header.css';
import amrutamLogo from '../images/amrutamlogo.png';

function Header() {
  return (
    <div className="header-section">
      <div className="header-content">
        <img src={amrutamLogo} alt="Amrutam Logo" className="header-logo" />
        <div className="header-menu">
          <span className="header-text">About Us</span>
          <span className="header-text">Onboarding</span>
          <span className="header-text">FAQ</span>
          <span className="header-text">Testimonials</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
