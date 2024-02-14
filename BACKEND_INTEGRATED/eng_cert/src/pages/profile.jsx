// Profile.jsx

import React, { useState } from 'react';
import profilePhoto from '../assets/images/profile.jpg';
import '../assets/css/Profile.css';
import Sidebar from './Sidebar';

const Profile = () => {
  const initialUserDetails = {
    firstName: 'abc',
    lastName: 'd',
    mobileNumber: '123-456-7890',
    email: 'abc.d@example.com',
    address: '123 Main Street, Cityville',
    occupation: 'Software Developer',
    interests: 'Reading, Traveling',
  };

  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSave = () => {
    setIsEditing(false);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          profilePhoto: reader.result,
        }));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className={`profile-container ${isEditing ? 'editing' : ''}`}>
      <div className="profile-header">
        <div className="profile-photo-container">
          <img src={userDetails.profilePhoto || profilePhoto} alt="Profile" className="profile-photo" />
          {isEditing && (
            <div className="edit-overlay">
              <label htmlFor="file-input" className="change-photo-label">
                Change Photo
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
        <div className="profile-fields">
          <h2>{`${userDetails.firstName} ${userDetails.lastName}`}</h2>
        
          <div className="field">
            <label>Occupation:</label>
            {isEditing ? (
              <input
                type="text"
                name="occupation"
                value={userDetails.occupation}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.occupation}</span>
            )}
          </div>
          <div className="field">
            <label>Interests:</label>
            {isEditing ? (
              <input
                type="text"
                name="interests"
                value={userDetails.interests}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.interests}</span>
            )}
          </div>
        </div>
      </div>
      <div className="profile-fields">
        <div className="field">
          <label>Mobile Number:</label>
          {isEditing ? (
            <input
              type="text"
              name="mobileNumber"
              value={userDetails.mobileNumber}
              onChange={handleInputChange}
              readOnly
            />
          ) : (
            <span>{userDetails.mobileNumber}</span>
          )}
        </div>
        <div className="field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="text"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              readOnly
            />
          ) : (
            <span>{userDetails.email}</span>
          )}
        </div>
        <div className="field">
          <label>Address:</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userDetails.address}</span>
          )}
        </div>
      </div>
      <div className="profile-buttons">
        <div className="save-edit-buttons">
          {isEditing ? (
            <>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
              &nbsp;
              <button className="cancel-button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Profile;
