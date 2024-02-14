// AddCourse.jsx

import React, { useState } from 'react';
import '../assets/css/AddCourse.css'; 

const AddCourse = ({ onCourseAdded }) => {
  const initialFormData = {
    courseName: '',
    description: '',
    duration: '',
    cost: '', // Adjusted field name to match the backend
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSuccessAnimationVisible, setIsSuccessAnimationVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.courseName.trim()) {
      isValid = false;
      newErrors.courseName = 'Course Name is required';
    }

    if (!formData.description.trim()) {
      isValid = false;
      newErrors.description = 'Course Description is required';
    }

    if (!formData.duration.trim()) {
      isValid = false;
      newErrors.duration = 'Duration is required';
    }

    if (!formData.cost.trim() || isNaN(formData.cost)) {
      isValid = false;
      newErrors.cost = 'Valid Course Cost is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8081/course/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setIsSuccessAnimationVisible(true);
          console.log('Course added successfully');
          onCourseAdded();
          setFormData(initialFormData);
        } else {
          console.error('Failed to add course');
        }
      } catch (error) {
        console.error('Error adding course:', error);
      }
    } else {
      console.log('Form validation failed');
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="addcourse-admin-page-container">
      <form className="addcourse-admin-form" onSubmit={handleSubmit}>
        <h2 style={{color:'aliceblue'}}>Add New Course</h2>

        <div className="addcourse-admin-form-group">
           <label htmlFor="courseName" className="addcourse-admin-label">
             Course Name:
           </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.courseName && (
            <p className="addcourse-admin-error-message">{errors.courseName}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="description" className="addcourse-admin-label">
            Course Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="addcourse-admin-textarea"
          />
          {errors.description && (
            <p className="addcourse-admin-error-message">{errors.description}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="duration" className="addcourse-admin-label">
            Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.duration && (
            <p className="addcourse-admin-error-message">{errors.duration}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="cost" className="addcourse-admin-label">
            Course Cost:
          </label>
          <input
            type="text"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.cost && (
            <p className="addcourse-admin-error-message">{errors.cost}</p>
          )}
        </div>

        <button type="submit" className="addcourse-admin-button">
          Add Course
        </button>

        {isSuccessAnimationVisible && (
          <div className="addcourse-admin-success-animation">Course Added Successfully!</div>
        )}
      </form>
    </div>
  );
};

export default AddCourse;
