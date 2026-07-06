import React from 'react';
import './Hero.css';
import doctorImage from '../images/groupdoctorrr.png';
import firstIcon from '../images/first.png';
import secondIcon from '../images/secnd.png';
import thirdIcon from '../images/third.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="welcome-text">Namaste, Welcome to Amrutam</p>
          <h1 className="main-heading">
            Join Amrutam – <span className="text-green">Grow Your Practice</span>
          </h1>
          <p className="description">
            Connect with more patients, set your own schedule,<br />
            and grow your Ayurvedic practice effortlessly.
          </p>
          <button className="join-button">Join Now</button>
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-number">500+</p>
              <p className="stat-label">Average Active<br />Users</p>
            </div>
            <div className="stats-divider"></div>
            <div className="stat-item">
              <p className="stat-number">40+</p>
              <p className="stat-label">Average daily<br />free calls</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={doctorImage} alt="Doctors" className="doctor-main" />
          <img src={firstIcon} alt="Ayurvedic Bowl" className="icon-first" />
          <img src={thirdIcon} alt="Yoga" className="icon-second" />
          <img src={secondIcon} alt="Calendar" className="icon-third" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
