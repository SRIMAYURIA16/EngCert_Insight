// WhyUs.jsx
import React from 'react';
import '../assets/css/WhyUs.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <header className="why-us-header">
        <h1>Anglo Certify - Why Us</h1>
      </header>

      <section className="why-us-section">
        <h2>Why Choose Anglo Certify?</h2>
        <p className="sub-heading">Unlock a World of Language Excellence with Anglo Certify's British English Certification Courses.</p>
        <ul>
          <li><span className="highlight">Quality Courses:</span> Explore our accredited and comprehensive learning materials designed to elevate your language skills.</li>
          <li><span className="highlight">Expert Instructors:</span> Learn from experienced and qualified professionals who are passionate about helping you succeed.</li>
          <li><span className="highlight">Flexibility:</span> Tailor your learning experience with flexible schedules and convenient online access to course materials.</li>
          <li><span className="highlight">Community Support:</span> Join a vibrant community of language enthusiasts, share experiences, and participate in group activities.</li>
          <li><span className="highlight">Career Opportunities:</span> Enhance your communication skills, opening doors to new career opportunities and professional growth.</li>
          <li><span className="highlight">Competitive Pricing:</span> Access high-quality courses at competitive prices, ensuring excellent value for your investment in education.</li>
        </ul>
        <p>Ready to embark on a transformative language journey?</p>
        <Link to="/courses">
          <button className='button'>Explore Courses</button>
        </Link>
      </section>
    </div>
  );
};

export default WhyUs;
