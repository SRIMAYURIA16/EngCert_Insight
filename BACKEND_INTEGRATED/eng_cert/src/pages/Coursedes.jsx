import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/Coursedes.css';
import EnrollmentForm from './EnrollmentForm';

function Coursedes() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [course, setCourse] = useState(null);
  let { courseId } = useParams();

  // Print courseId and course to console
  console.log('courseId:', courseId);
  console.log('course:', course);

  useEffect(() => {
    axios.get(`http://localhost:8081/course/get/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [courseId]);

  const handleEnrollClick = () => {
    setPopupVisibility(true);
  };

  const handlePopupClose = () => {
    setPopupVisibility(false);
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Coursedes-container">
      <div className='Coursedes-content'>
        <div className='Coursedes-details'>
          <div id="coursedes-p">
            <h2 className="animated-title">{course.courseName}</h2>
            <h3>Description</h3>
            <p>{course.description}</p>
            <h3>Duration</h3>
            <p>{course.duration}</p>
            <h3>Cost</h3>
            <p>{course.cost}</p>
            <div className="Coursedes-buttons-container">
              <button type="button" onClick={handleEnrollClick} className="Coursedes-enroll-button">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPopupVisible && (
  <div className="custom-popup">
    <div className="popup-content">
      <span className="close" onClick={handlePopupClose}>&times;</span>
      <EnrollmentForm courseName={course.courseName} courseId={course.courseId} onClose={handlePopupClose} />
    </div>
  </div>
)}
    </div>
  );
}

export default Coursedes;
