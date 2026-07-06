import React from 'react';
import './JoinCircle.css';
import backgroundBox from '../images/backgroundbox.png';
import backgroundBoxImage from '../images/backgroundboximage.png';

const JoinCircle = () => {
  return (
    <section className="join-circle">
      <div className="join-circle-container">
        <div className="join-circle-header">
          <h2 className="join-circle-title">Join Our Circle of Care</h2>
          <p className="join-circle-subtitle">Becoming a part of Amrutam is simple</p>
        </div>

        <div className="join-circle-content">
          <div className="steps-section">
            <div className="step-box">
              <h3 className="step-title">Step 1: Get your referral code</h3>
              <p className="step-description">Contact us to receive your unique referral code.</p>
            </div>

            <div className="step-box">
              <h3 className="step-title">Step 2: Register on Amrutam</h3>
              <p className="step-description">Sign up on the Amrutam Doctors app or website to join our specialist network.</p>
            </div>

            <div className="step-box">
              <h3 className="step-title">Step 3: Complete KYC</h3>
              <p className="step-description">Fill in your details and upload the required documents for verification.</p>
            </div>

            <div className="step-box">
              <h3 className="step-title">Step 4: Start consulting</h3>
              <p className="step-description">Once verified, begin offering consultations and helping patients.</p>
            </div>
          </div>

          <div className="image-section">
            <div className="image-background-wrapper">
              <img src={backgroundBox} alt="Background Box" className="background-box-image" />
              <img src={backgroundBoxImage} alt="Become An Amrutam Doctor" className="join-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCircle;
