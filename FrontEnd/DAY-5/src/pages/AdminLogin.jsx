import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/Login.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation
    if (formData.email.trim() === '') {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (formData.password.trim() === '') {
      isValid = false;
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      isValid = false;
      newErrors.password = 'Password must be at least 8 characters long and include 1 special character and 1 digit';
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (input) => {
    // A simple email validation example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const isValidPassword = (input) => {
    // Password validation with at least 8 characters, 1 special character, and 1 digit
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Form validation failed
      return;
    }

    // Simulate login process for admin
    const adminInformation = {
      email: formData.email,
      role: 'admin',
    };

    navigate('/front', { state: { user: adminInformation } });
  };

  return (
    <div className='bg-admin'>
      <div className='wrapper'>
        <form>
          <h1>Admin Login</h1>
          <div className='input-box'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FaUser className='icon' />
          </div>
          {errors.email && <p className='error-message'>{errors.email}</p>}
          <div className='input-box'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className='icon' />
          </div>
          {errors.password && <p className='error-message'>{errors.password}</p>}
          <Link to="/front"><button type='submit' style={{ backgroundColor: 'aliceblue', color: 'rgb(2,52,95)' }} onClick={handleSubmit}>
            Login
          </button></Link>
          <div className='register-link'>
            <p>
              Go back to{' '}
              <Link to='/' style={{ color: 'blue' }}>
                Home
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
