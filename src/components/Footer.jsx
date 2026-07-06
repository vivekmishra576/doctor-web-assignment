import React from 'react';
import './Footer.css';
import amrutamLogo from '../images/amrutamlogo.png';
import facebookIcon from '../images/faceb.png';
import instaIcon from '../images/insta.png';
import youtubeIcon from '../images/utube.png';
import twitterIcon from '../images/twiter.png';
import linkedinIcon from '../images/linkdin.png';
import pinterestIcon from '../images/picss.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-column-1">
          <img src={amrutamLogo} alt="Amrutam Logo" className="footer-logo" />
          <h3 className="footer-column-title">Get in touch</h3>
          <div className="footer-contact">
            <p className="footer-text">support@amrutam.global</p>
            <p className="footer-text">Amrutam Pharmaceuticals Pvt Ltd.,</p>
            <p className="footer-text">chitragupt ganj, Nai Sadak, Lashkar,</p>
            <p className="footer-text">Gwalior – 474001</p>
            <p className="footer-text">+91 9713171999</p>
          </div>
        </div>

        <div className="footer-column footer-column-2">
          <h3 className="footer-column-title">Information</h3>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#terms" className="footer-link">Terms and Conditions</a></li>
            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="#privacy-app" className="footer-link">Privacy Policy for Mobile App</a></li>
            <li><a href="#shipping" className="footer-link">Shipping and Return Policy</a></li>
            <li><a href="#delivery" className="footer-link">International Delivery</a></li>
            <li><a href="#business" className="footer-link">For Business, Hotels and Resorts</a></li>
          </ul>
        </div>

        <div className="footer-column footer-column-3">
          <h3 className="footer-column-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={instaIcon} alt="Instagram" className="social-icon-img" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={youtubeIcon} alt="YouTube" className="social-icon-img" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={twitterIcon} alt="Twitter" className="social-icon-img" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={pinterestIcon} alt="Pinterest" className="social-icon-img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
