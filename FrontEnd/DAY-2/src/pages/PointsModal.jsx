import React from 'react';
import '../assets/css/pointsmodal.css';

const PointsModal = ({ course, closeModal }) => {
  return (
    <div className="points-modal-overlay" onClick={closeModal}>
      <div className="points-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{course.title} - Points and Statistics</h2>
        {course.points !== undefined && (
          <p><strong>Points Scored:</strong> {course.points}</p>
        )}
        {course.rewards && (
          <p><strong>Rewards:</strong> {course.rewards.join(', ')}</p>
        )}
        {course.enrolledDate && (
          <p><strong>Enrolled Date:</strong> {course.enrolledDate}</p>
        )}
        {course.completedDate && (
          <p><strong>Completed Date:</strong> {course.completedDate}</p>
        )}
      </div>
    </div>
  );
};

export default PointsModal;
