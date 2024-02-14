import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { loginUser } from '../Features/userSlice.js';
import '../assets/css/Login.css';
import axios from 'axios'; 

const Login = () => {
  const dispatch = useDispatch();
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

    if (formData.email.trim() === '') {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const userInformation = {
        email: formData.email,
        password: formData.password
    };

    try {
        const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', userInformation);

        if (response.status === 200) {
            
            dispatch(loginUser(userInformation));
           
            navigate('/');
        } else {
            
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in. Please try again later.');
    }
};

  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const isValidPassword = (input) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(input);
  };

  return (
    <div className='bg'>
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type='text'
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
          <div className='remember-forgot'>
            <Link to='/register' style={{ color: 'rgb(2,52,95)' }}>New user? Register</Link>
            {/* Redirects to the registration page */}
          </div>
          <button type='submit' style={{ backgroundColor: 'aliceblue', color: 'rgb(2,52,95)' }} onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
