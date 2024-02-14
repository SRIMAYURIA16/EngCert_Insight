import React, { useState } from 'react';
import axios from 'axios';

const EnrollmentForm = ({ courseName, courseId, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [enrollmentError, setEnrollmentError] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.fullName.trim()) {
      isValid = false;
      newErrors.fullName = 'Full Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Valid Email is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        // Send a GET request to retrieve user information by email
        const response = await axios.get(`http://localhost:8081/api/v1/auth/getByEmail?email=${formData.email}`);
        
        // Extract user ID from the response
        const userId = response.data.id;
        console.log('Retrieved user ID:', userId);

        // Check if userId is null or undefined
        if (!userId) {
          throw new Error('User ID is not valid');
        }

        console.log('Course ID:', courseId);

        // Make the PUT request to enroll the user in the course
        await axios.put(`http://localhost:8081/api/v1/auth/enroll/${userId}/${courseId}`, {
          courseId: courseId,
        });
        
        console.log('Enrollment successful');
        setLoading(false);
        onClose();
      } catch (error) {
        console.error('Error enrolling:', error);
        setEnrollmentError('Error enrolling user in the course. Please try again.');
        setLoading(false);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  return (
    <form className="enrollment-form" onSubmit={handleSubmit}>
      <h2>Enrollment Form for {courseName}</h2>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {enrollmentError && <p className="error-message">{enrollmentError}</p>}
          <button style={{ color: 'aliceblue', backgroundColor: 'rgb(2,52,97)' }} type="submit">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default EnrollmentForm;
