// EnquiryPage.jsx

import React, { useState } from 'react';
import '../assets/css/EnquiryPage.css';
import Sidebar from "../pages/Sidebar.jsx"

const EnquiryPage = () => {
  const [enquiryType, setEnquiryType] = useState('general');
  const [enquiries, setEnquiries] = useState([
    {
      type: 'general',
      message: 'How can I reset my password?',
      status: 'sent',
      email: 'user1@example.com',
      tracking: 1,
      sendDate: '2024-01-29 12:30 PM',
      responderDate: null,
    },
    {
      type: 'technical',
      message: 'Experiencing issues with the video playback.',
      status: 'sent',
      email: 'user2@example.com',
      tracking: 2,
      sendDate: '2024-01-30 10:45 AM',
      responderDate: null,
    },
    {
      type: 'course',
      message: 'Can you provide more details about the React course?',
      status: 'sent',
      email: 'user3@example.com',
      tracking: 3,
      sendDate: '2024-02-01 2:15 PM',
      responderDate: null,
    },
  ]);
  const [newEnquiry, setNewEnquiry] = useState('');
  const [email, setEmail] = useState('');
  const [technicalIssue, setTechnicalIssue] = useState('');
  const [courseName, setCourseName] = useState('');
  const [activeSection, setActiveSection] = useState('sent');

  const isValidEmail = (input) => {
    // A simple email validation example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEnquiryTypeChange = (event) => {
    setEnquiryType(event.target.value);
  };

  const handleNewEnquiryChange = (event) => {
    setNewEnquiry(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTechnicalIssueChange = (event) => {
    setTechnicalIssue(event.target.value);
  };

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleCreateNewEnquiry = () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const newEnquiryData = {
      type: enquiryType,
      message: newEnquiry,
      status: 'sent',
      email: email,
      tracking: enquiries.filter(enquiry => enquiry.status === 'sent').length + 1,
      sendDate: new Date().toLocaleString(),
      responderDate: null,
    };

    setEnquiries((prevEnquiries) => [...prevEnquiries, newEnquiryData]);

    setNewEnquiry('');
    setEmail('');
    setTechnicalIssue('');
    setCourseName('');
  };

  const handleRespondEnquiry = (index) => {
    if (enquiries[index].status === 'sent') {
      const updatedEnquiries = [...enquiries];
      updatedEnquiries[index].status = 'solved';
      updatedEnquiries[index].responderDate = new Date().toLocaleString();
      setEnquiries(updatedEnquiries);
    }
  };

  return (
    <div className="enquiry-container">
      <div className="toggle-buttons-enquiry">
        <button className={`toggle-button-enquiry ${activeSection === 'sent' ? 'active' : ''}`} onClick={() => setActiveSection('sent')}>Sent Enquiries</button>
        <button className={`toggle-button-enquiry ${activeSection === 'solved' ? 'active' : ''}`} onClick={() => setActiveSection('solved')}>Solved Enquiries</button>
        <button className={`toggle-button-enquiry ${activeSection === 'create' ? 'active' : ''}`} onClick={() => setActiveSection('create')}>Create New Enquiry</button>
      </div>

      <section className={`enquiry-section ${activeSection === 'sent' ? 'active' : ''}`}>
        <h2 style={{ color: 'aliceblue' }}>Sent Enquiries</h2>
        <ul>
          {enquiries
            .filter((enquiry) => enquiry.status === 'sent')
            .map((sentEnquiry, index) => (
              <li key={index} className="enquiry-item">
                <strong>#{sentEnquiry.type}{index + 1}</strong>
                <br />
                Tracking: {sentEnquiry.tracking}
                <br />
                {sentEnquiry.message}
                <br />
                <strong>Email:</strong> {sentEnquiry.email}
                <br />
                <strong>Sent Date:</strong> {sentEnquiry.sendDate}
                <br />
                <button onClick={() => handleRespondEnquiry(index)}>Mark as Responded</button>

              </li>
            ))}
        </ul>
      </section>

      <section className={`enquiry-section ${activeSection === 'solved' ? 'active' : ''}`}>
        <h2 style={{ color: 'aliceblue' }}>Solved Enquiries</h2>
        <ul>
          {enquiries
            .filter((enquiry) => enquiry.status === 'solved')
            .map((solvedEnquiry, index) => (
              <li key={index} className="enquiry-item">
                <strong>#{solvedEnquiry.type}{index + 1}</strong>
                <br />
                {solvedEnquiry.message}
                <br />
                <strong>Response:</strong> Thank you for your enquiry. Our support team responded on {solvedEnquiry.responderDate}.
              </li>
            ))}
        </ul>
      </section>

      <section className={`enquiry-section ${activeSection === 'create' ? 'active' : ''}`}>
        <h2 style={{ color: 'aliceblue' }}>Create New Enquiry</h2>
        <div className="enquiry-form">
          <label className="enquiry-label">
            Enquiry Type:
            <select className="enquiry-select" value={enquiryType} onChange={handleEnquiryTypeChange}>
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="course">Course Information</option>
            </select>
          </label>
        </div>

        {enquiryType === 'general' && (
          <div className="enquiry-form">
            <label className="enquiry-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </label>
            <p className="enquiry-text">Provide your query:</p>
            <textarea
              className="enquiry-textarea"
              value={newEnquiry}
              onChange={handleNewEnquiryChange}
              placeholder="Type your enquiry here..."
            />
          </div>
        )}

        {enquiryType === 'technical' && (
          <div className="enquiry-form">
            <label className="enquiry-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </label>
            <label className="enquiry-label">
              Describe the technical issue:
              <textarea
                className="enquiry-textarea"
                value={technicalIssue}
                onChange={handleTechnicalIssueChange}
                placeholder="Describe the technical issue..."
              />
            </label>
          </div>
        )}

        {enquiryType === 'course' && (
          <div className="enquiry-form">
            <label className="enquiry-label">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </label>
            <label className="enquiry-label">
              Course Name:
              <input
                type="text"
                value={courseName}
                onChange={handleCourseNameChange}
                placeholder="Enter the course name"
              />
            </label>
            <p className="enquiry-text">Provide your enquiry:</p>
            <textarea
              className="enquiry-textarea"
              value={newEnquiry}
              onChange={handleNewEnquiryChange}
              placeholder="Type your enquiry here..."
            />
            <Sidebar />
          </div>
        )}

        <div className="enquiry-form">
          <button className="enquiry-button" onClick={handleCreateNewEnquiry}>Submit Enquiry</button>
        </div>
      </section>

    </div>
  );
};

export default EnquiryPage;
