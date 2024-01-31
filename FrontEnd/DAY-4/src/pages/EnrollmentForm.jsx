import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const EnrollmentForm = ({ courseName, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

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

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      isValid = false;
      newErrors.phoneNumber = 'Valid Phone Number is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      onClose();
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

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
      </div>

      <Link to="/pay">
        <button style={{ color: 'aliceblue', backgroundColor: 'rgb(2,52,97)' }} type="submit">
          Submit & Make Payment
        </button>
      </Link>
    </form>
  );
};

export default EnrollmentForm;
