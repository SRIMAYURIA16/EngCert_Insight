// AdminFront.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import "../assets/css/AdminFront.css";
import AdminNav from './AdminNav';

const AdminFront = () => {
  const platformMetrics = {
    userRegistrations: 1200,
    courseEnrollments: 800,
    revenue: '$50,000',
    userEngagement: 'High',
    activityInsights: 'Positive',
  };

  return (
    <div className="adminfront-container">
      <h1 className="adminfront-heading">Admin Front Page</h1>
        

      <div className="adminfront-dashboard-overview">
        <h2 className="adminfront-subheading">Dashboard Overview</h2>
        <div className="adminfront-metrics-container">
          <div className="adminfront-metric-item">
            <span className="adminfront-metric-label">User Registrations:</span>
            <span className="adminfront-metric-value">{platformMetrics.userRegistrations}</span>
          </div>

          <div className="adminfront-metric-item">
            <span className="adminfront-metric-label">Course Enrollments:</span>
            <span className="adminfront-metric-value">{platformMetrics.courseEnrollments}</span>
          </div>

          <div className="adminfront-metric-item">
            <span className="adminfront-metric-label">Revenue:</span>
            <span className="adminfront-metric-value">{platformMetrics.revenue}</span>
          </div>

          <div className="adminfront-metric-item">
            <span className="adminfront-metric-label">User Engagement:</span>
            <span className="adminfront-metric-value">{platformMetrics.userEngagement}</span>
          </div>

          <div className="adminfront-metric-item">
            <span className="adminfront-metric-label">Activity Insights:</span>
            <span className="adminfront-metric-value">{platformMetrics.activityInsights}</span>
          </div>
        </div>
      </div>

      <div className="adminfront-user-management-section">
        <h2 className="adminfront-subheading">User Management</h2>
        <p className="adminfront-paragraph">
          A section to manage user accounts, including the ability to view, edit, or delete user profiles.
        </p>
      </div>

      <Link to="/admin">
        <button className="adminfront-go-to-dashboard-button">Go to Admin Dashboard</button>
      </Link>
      <AdminNav/>
    </div>
  );
};

export default AdminFront;
