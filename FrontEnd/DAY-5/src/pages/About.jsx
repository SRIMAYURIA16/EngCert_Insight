
import React from 'react';
import "../assets/css/about.css"

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-rectangular-box">
        <div className="about-us-content-inside-rectangular-box">
          <section className="about-us-section">
            <h2>Introduction</h2>
            <p>Welcome to British English Certification, your gateway to mastering the English language in its British variant. We are dedicated to providing high-quality language certification programs that cater specifically to British English standards. Our goal is to empower individuals with the linguistic skills needed to thrive in various academic, professional, and social contexts.</p>
          </section>

          <section className="about-us-section">
            <h2>Mission</h2>
            <p><strong>Mission:</strong> Our mission is to set the standard for excellence in British English certification. We aim to deliver comprehensive language assessment programs that not only certify proficiency but also foster a deep understanding and appreciation for the nuances of British English language and culture.</p>
          </section>
          <section className="about-us-section">
            <h2>Vision</h2>
            <p><strong>Vision:</strong> We envision a world where individuals, regardless of their background, can access top-tier British English language certification. Our vision is to be the foremost authority in British English proficiency assessment, contributing to global communication and connecting people through the richness of the English language.</p>
          </section>

          <section className="about-us-section">
            <h2>Team Members</h2>
            <p>Our team is composed of dedicated language experts, educators, and professionals who are passionate about promoting British English proficiency.</p>
          </section>

          
            <p><strong>John Doe</strong> - Founder and CEO</p>
            <p><strong>Jane Smith</strong> - Chief Operating Officer</p>
            <p><strong>Mark Johnson</strong> - Chief Technology Officer</p>
        
         
          <section className="about-us-section">
            <h2>Values</h2>
            <p>We uphold values of integrity, excellence, inclusivity, and continuous improvement in all aspects of our language certification programs.</p>
          </section>

            <p><strong>Excellence:</strong> Striving for the highest quality in everything we do.</p>
            <p><strong>Innovation:</strong> Embracing creativity and pushing boundaries.</p>
            <p><strong>Integrity:</strong> Conducting business with honesty and transparency.</p>

            <section className="about-us-section">
            <h2>Contact Us</h2>
            <p>Feel free to connect with us through the following channels:</p>

            <div className="contact-info">
              <p ><i className="fab fa-instagram" ></i> <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" style={{color:'blue'}}>Instagram</a></p>
              <p><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" style={{color:'blue'}}>Facebook</a></p>
              <p><i className="fab fa-youtube"></i> <a href="https://www.youtube.com/your-youtube" target="_blank" rel="noopener noreferrer" style={{color:'blue'}}>YouTube</a></p>
              <p><i className="fas fa-phone"></i> <a href="tel:+123456789" style={{color:'blue'}}>123-456-789</a></p>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
