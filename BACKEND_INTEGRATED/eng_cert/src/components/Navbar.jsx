import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';
import logoImage from '../assets/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Features/userSlice.js'; 

function Navbar() {
  const dispatch = useDispatch();
  const userInformation = useSelector(state => state.user.user);
  const userEmail = userInformation?.email;
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout successful');
    dispatch(logoutUser());
    navigate('/'); 
  };

  const handleProfileClick = () => {
    navigate('/pro');
  };

  return (
    <>
      <nav className="navbar">
      <h3 className="logo">
  <img src={logoImage} alt="Logo" />
  <h2 style={{ color: 'rgb(2,52,95)' }}>Anglo Certify</h2>
</h3>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
          <Link to="/" className="Home">
            <li>
              <h3>Home</h3>
            </li>
          </Link>
          <Link to="/about" className="About">
            <li>
              <h3>About Us</h3>
            </li>
          </Link>

          {userInformation ? (
            <li className="dropdown">
              <div className="user-greeting">
                <h3>Hi, {userEmail}</h3>
                <ul className="dropdown-content">
                  <li onClick={handleProfileClick} style={{ cursor: 'pointer' }}>My Profile</li>
                  <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
                </ul>
              </div>
            </li>
          ) : (
            <Link to="/login" className="Login">
              <li>
                <h3>Login/Sign Up</h3>
              </li>
            </Link>
          )}
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
