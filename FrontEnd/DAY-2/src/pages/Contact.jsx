// Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <div className="whole">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <i className="fab fa-instagram icon"></i>
              <span>Instagram: @anglocertify</span>
            </div>
            <div className="info-item">
              <i className="fab fa-whatsapp icon"></i>
              <span>WhatsApp: +1 123 456 7890</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone icon"></i>
              <span>Telephone: +1 987 654 3210</span>
            </div>
            <div className="info-item">
              <i className="far fa-envelope icon"></i>
              <span>Email: info@anglocertify.com</span>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send us a Message</h2>
            {/* Add your contact form here */}
            {/* ...
            <form>
              ...
            </form>
            */}
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default Contact;
