import React, { useState } from 'react';
import { FaUser, FaLock, FaMobile } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import "../assets/css/Register.css"

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      isValid = false;
      newErrors.firstName = 'First Name is required';
    }

    // Uncomment the following lines if you want to validate the last name
    // if (!formData.lastName.trim()) {
    //   isValid = false;
    //   newErrors.lastName = 'Last Name is required';
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Valid Email is required';
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
      isValid = false;
      newErrors.mobile = 'Valid Mobile Number is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Assuming you have an authentication service to handle registration
      // On successful registration, set the user's information in a state variable
      const userInformation = {
        name: formData.firstName, // You can use 'lastName' as well if needed
        email: formData.email,
      };

      // Redirect to home page after successful registration
      navigate('/', { state: { user: userInformation } });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className='register-bg'>
      <div className='register-wrapper'>
        <form>
          <h2>Register</h2>
          <div className='input-box'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FaUser className='icon' />
          </div>
          {errors.firstName && <p className='error-message'>{errors.firstName}</p>}
          {/* Uncomment the following lines if you want to include Last Name */}
          {/* <div className='input-box'>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <FaUser className='icon' />
          </div>
          {errors.lastName && <p className='error-message'>{errors.lastName}</p>} */}
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
              name='mobile'
              placeholder='Mobile Number'
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <FaMobile className='icon' />
          </div>
          {errors.mobile && <p className='error-message'>{errors.mobile}</p>}
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
