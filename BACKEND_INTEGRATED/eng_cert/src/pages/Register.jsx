import React, { useState } from 'react';
import { FaUser, FaLock, FaMobile } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/Register.css"

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:'',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name:'',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isValid = validateForm();
  
    if (!isValid) {
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name: formData.name,
        email: formData.email,
        mobileNo: formData.mobileNo,
        password: formData.password
      });
  
      if (response.status === 200) {
        navigate('/login');
        alert("Registration Successful!!");
      }
    } catch (error) {
      console.error('Error registering user:', error);
  
      // Check if the error is due to the user already being registered
      if (error.response && error.response.status === 409) {
        setErrors({ ...errors, email: 'Email is already registered' });
      } else {
        // Handle other types of errors
        alert('An error occurred while registering. Please try again later.');
      }
    }
  };
  

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Valid Email is required';
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobileNo.trim() || !mobileRegex.test(formData.mobileNo)) {
      isValid = false;
      newErrors.mobileNo = 'Valid Mobile Number is required';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (formData.password.length < 8 || !passwordRegex.test(formData.password)) {
      isValid = false;
      newErrors.password = 'Password should be at least 8 characters with 1 special character and 1 digit';
    }

    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className='register-bg'>
      <div className='register-wrapper'>
        <form>
          <h2>Register</h2>
          <div className='input-box'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FaUser className='icon' />
          </div>
          {errors.name && <p className='error-message'>{errors.name}</p>}

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
              type='tel'
              name='mobileNo'
              placeholder='Mobile Number'
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
            <FaMobile className='icon' />
          </div>
          {errors.mobileNo && <p className='error-message'>{errors.mobileNo}</p>}

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

          <div className='input-box'>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <FaLock className='icon' />
          </div>
          {errors.confirmPassword && <p className='error-message'>{errors.confirmPassword}</p>}

          <button type='submit' style={{ backgroundColor: 'aliceblue', color: 'rgb(2,52,95)' }} onClick={handleSubmit}>
            Register
          </button>

          <div className='register-link'>
            <p>
              Already have an account?{' '}
              <Link to='/login' style={{ color: 'blue' }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
