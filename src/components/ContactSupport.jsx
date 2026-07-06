import React from 'react';
import './ContactSupport.css';
import contactImage from '../images/leftimagee.png';

const ContactSupport = () => {
  return (
    <div className="contact-support">
      <div className="contact-container">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-description">
          We're here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
        </p>
        <div className="contact-content">
          <div className="contact-left">
            <img src={contactImage} alt="Contact" className="contact-image" />
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Vikas Kumar"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact" className="form-label">Your Contact Number</label>
                  <input
                    type="text"
                    id="contact"
                    className="form-input"
                    placeholder="8743414476"
                  />
                </div>
              </div>
              <div className="form-group form-full">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="vikass@gmail.com"
                />
              </div>
              <div className="form-group form-full">
                <label htmlFor="message" className="form-label">Message (Optional)</label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  placeholder="I want to On-board as a Doctor"
                ></textarea>
              </div>
              <button type="button" className="submit-button">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
