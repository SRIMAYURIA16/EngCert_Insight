// AdminNav.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import logoImage from '../assets/images/logo.png';
import '../assets/css/AdminNav.css';

function AdminNav() {
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const userInformation = location.state?.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Admin Logout successful');
    navigate('/front', { state: { user: null } });
  };

  const handleProfileClick = () => {
    navigate('/adminprofile');
  };

  return (
    <>
      <nav className="adminnav-container">
        <h3 className="adminnav-logo">
          <img src={logoImage} alt="Logo" />
          <h2 className="adminnav-logo-text">Admin Panel</h2>
        </h3>
        <ul className={isMobile ? 'adminnav-links-mobile' : 'adminnav-links'} onClick={() => setIsMobile(false)}>
          <Link to="/admin" className="AdminDashboard">
            <li>
              <h3>Dashboard</h3>
            </li>
          </Link>
          <Link to="/users" className="AdminUsers">
            <li>
              <h3>Users</h3>
            </li>
          </Link>
          <Link to="/adminabout" className="AdminUsers">
            <li>
              <h3>About</h3>
            </li>
          </Link>

          {userInformation ? (
            <li className="adminnav-dropdown">
              <div className="adminnav-user-greeting">
                <h3>Hi, Admin</h3>
                <ul className="adminnav-dropdown-content">
                  {/* <li onClick={handleProfileClick} style={{ cursor: 'pointer' }}>My Profile</li> */}
                  <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
                </ul>
              </div>
            </li>
          ) : (
            <Link to="/adminlogin" className="AdminLogin">
              <li>
                <h3>Login</h3>
              </li>
            </Link>
          )}
        </ul>
        {window.innerWidth <= 780 && (
          <button className="adminnav-mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        )}
      </nav>
    </>
  );
}

export default AdminNav;
