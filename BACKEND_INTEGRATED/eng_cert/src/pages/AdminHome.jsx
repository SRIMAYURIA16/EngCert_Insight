// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Adminhome.css'; // Import the corresponding CSS file
import AdminNav from './AdminNav';
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Admin Dashboard</h1>

      <div className="dashboard-columns">
        <div className="dashboard-column">
          <div className="dashboard-section add-courses">
            <h2>Add Courses</h2>
            <p>Add new courses to the platform.</p>
            <Link to="/addcourse">Go to Add Courses</Link>
          </div>

          <div className="dashboard-section view-courses">
            <h2>View Courses</h2>
            <p>View and manage existing courses.</p>
            <Link to="/view">Go to View Courses</Link>
          </div>
        </div>

        <div className="dashboard-column">
          <div className="dashboard-section view-enquiries">
            <h2>View Enquiries</h2>
            <p>Check and respond to user enquiries.</p>
            <Link to="/adminenquiry">Go to View Enquiries</Link>
          </div>

          {/* <div className="dashboard-section view-payment">
            <h2>View Payment History</h2>
            <p>Track and manage payment.</p>
            <Link to="/viewpay">Go to View Payment </Link>
          </div> */}
        </div>
        
      </div>
      <AdminNav/>
    </div>
  );
};

export default Home;
