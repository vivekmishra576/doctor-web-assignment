import React from 'react';
import './DownloadSection.css';
import phoneImage from '../images/downloadimageee.png';
import leafIcon from '../images/leaf.png';
import dollarIcon from '../images/dollar.png';
import callIcon from '../images/call-outline.png';
import walletIcon from '../images/wallet-done-01-solid-rounded 1.png';
import downloadLinks from '../images/downkloadlinkimage.png';

const DownloadSection = () => {
  return (
    <div className="download-section">
      <div className="download-container">
        <div className="download-left">
          <h1 className="download-title">
            Get Started Today – Download the App Now!
          </h1>
          <p className="download-description">
            Simplify consultations, manage patients, and grow your practice—all in one place.
          </p>
          <div className="download-cards">
            <div className="download-card">
              <img src={leafIcon} alt="Forum" className="card-icon" />
              <div className="card-text">
                <h3>Build Trust and</h3>
                <p>Community with Forum</p>
              </div>
            </div>
            <div className="download-card">
              <img src={dollarIcon} alt="Pay Per Conversation" className="card-icon" />
              <div className="card-text">
                <h3>Earn More with Pay</h3>
                <p>Per Conversation</p>
              </div>
            </div>
            <div className="download-card">
              <img src={callIcon} alt="Free Call" className="card-icon" />
              <div className="card-text">
                <h3>Attract Patients with</h3>
                <p>5-Minute Free Call</p>
              </div>
            </div>
            <div className="download-card">
              <img src={walletIcon} alt="Wallet" className="card-icon" />
              <div className="card-text">
                <h3>Instant Access to Your</h3>
                <p>Earnings with Wallet</p>
              </div>
            </div>
          </div>
          <div className="download-buttons">
            <img src={downloadLinks} alt="Download App" className="download-links-image" />
          </div>
        </div>
        <div className="download-right">
          <img src={phoneImage} alt="App Preview" className="download-phone-image" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
