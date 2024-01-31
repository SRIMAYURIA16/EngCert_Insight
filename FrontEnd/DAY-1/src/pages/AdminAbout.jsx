// AdminAboutPage.jsx
import React, { useState } from 'react';
import '../assets/css/AboutAdmin.css';

const AdminAboutPage = () => {
  const initialAboutContent = {
    introduction:
      'Welcome to British English Certification, your gateway to mastering the English language in its British variant. We are dedicated to providing high-quality language certification programs that cater specifically to British English standards. Our goal is to empower individuals with the linguistic skills needed to thrive in various academic, professional, and social contexts.',
    mission:
      'Our mission is to set the standard for excellence in British English certification. We aim to deliver comprehensive language assessment programs that not only certify proficiency but also foster a deep understanding and appreciation for the nuances of British English language and culture.',
    vision:
      'We envision a world where individuals, regardless of their background, can access top-tier British English language certification. Our vision is to be the foremost authority in British English proficiency assessment, contributing to global communication and connecting people through the richness of the English language.',
    teamMembers:
      'Our team is composed of dedicated language experts, educators, and professionals who are passionate about promoting British English proficiency.\n\n- John Doe: Founder and CEO\n- Jane Smith: Chief Operating Officer\n- Mark Johnson: Chief Technology Officer',
    values:
      'We uphold values of integrity, excellence, inclusivity, and continuous improvement in all aspects of our language certification programs.\n\n- Excellence: Striving for the highest quality in everything we do.\n- Innovation: Embracing creativity and pushing boundaries.\n- Integrity: Conducting business with honesty and transparency.',
  };

  const [aboutContent, setAboutContent] = useState(initialAboutContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You may want to save the updated content to the backend here
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset content to initial state when canceling
    setAboutContent(initialAboutContent);
  };

  const handleContentChange = (section, e) => {
    setAboutContent((prevContent) => ({
      ...prevContent,
      [section]: e.target.value,
    }));
  };

  return (
    <div className="adminabout-container">
      <h2>About Us</h2>

      {Object.keys(aboutContent).map((section) => (
        <section key={section} className="about-us-section">
          <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
          {isEditing ? (
            <textarea
              className="adminabout-editor"
              value={aboutContent[section]}
              onChange={(e) => handleContentChange(section, e)}
            />
          ) : (
            <p>{aboutContent[section]}</p>
          )}
        </section>
      ))}

      {isEditing ? (
        <div>
          <button className="adminabout-button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="adminabout-button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="adminabout-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default AdminAboutPage;
