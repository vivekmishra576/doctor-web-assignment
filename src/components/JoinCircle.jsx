import './JoinCircle.css';
import backgroundBox from '../images/backgroundbox.png';
import backgroundBoxImage from '../images/backgroundboximage.png';
import iphone1 from '../images/iphone 15.png';
import iphone2 from '../images/iphone 15-1.png';
import iphone3 from '../images/iphone 15-2.png';

const JoinCircle = () => {
  return (
    <section className="join-circle">
      <div className="join-circle-container">
        <div className="join-circle-header">
          <h2 className="join-circle-title">Join Our Circle of Care</h2>
          <p className="join-circle-subtitle">Becoming a part of Amrutam is simple</p>
        </div>

        {/* First Section - Steps */}
        <div className="join-circle-first-section">
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

        {/* Second Section - Tab Buttons and Phone Images */}
        <div className="join-circle-second-section">
          {/* Tab Buttons */}
          <div className="tab-buttons">
            <button className="tab-button active">
              Consultations
            </button>
            <button className="tab-button">
              Payment withdrawal
            </button>
            <button className="tab-button">
              Schedule
            </button>
          </div>

          {/* Content Section - All in one row */}
          <div className="join-circle-content">
            {/* Left Section */}
            <div className="left-section">
              <h3 className="content-title">Value Your Practice</h3>
              <img src={iphone1} alt="Value Your Practice" className="phone-image" />
            </div>

            {/* Center Section */}
            <div className="center-section">
              <img src={iphone2} alt="Appointments" className="phone-image center" />
              <h4 className="center-subtitle">Today's Healing Journey</h4>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <h3 className="content-title">Consultation Details</h3>
              <img src={iphone3} alt="Consultation Details" className="phone-image" />
            </div>
          </div>

          {/* Join Now Button */}
          <div className="join-now-section">
            <button className="join-now-button">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCircle;
