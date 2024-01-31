// Usercour.jsx
import React, { useState } from 'react';
import '../assets/css/usercour.css';
import Sidebar from './Sidebar';
import PointsPage from './PointsModal';

const Usercour = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: 'British English Certification Basics', status: 'enrolled' },
    { id: 2, title: 'Intermediate British English Certification', status: 'completed' },
    { id: 3, title: 'Advanced British English Certification', status: 'in-progress' },
    { id: 4, title: 'Business English for Professionals', status: 'enrolled' },
    { id: 5, title: 'IELTS Preparation Course', status: 'in-progress' },
    { id: 6, title: 'British Literature Appreciation', status: 'enrolled' },
    { id: 7, title: 'Effective Communication Skills', status: 'completed' },
    { id: 8, title: 'Public Speaking Mastery', status: 'enrolled' },
    { id: 9, title: 'Advanced British English Grammar', status: 'completed' },
    { id: 10, title: 'British History and Culture', status: 'in-progress' },
  ]);


  const [completedCourses, setCompletedCourses] = useState([
    { id: 11, title: 'Creative Writing Workshop', stars: 5, points: 100, rewards: ['Certificate'], enrolledDate: '2022-01-01', completedDate: '2022-02-01' },
    { id: 12, title: 'British English Poetry Analysis', stars: 4, points: 80, rewards: ['Badge'], enrolledDate: '2022-02-01', completedDate: '2022-03-01' },
    { id: 13, title: 'Professional Editing and Proofreading', stars: 3, points: 60, rewards: ['Certificate'], enrolledDate: '2022-03-01', completedDate: '2022-04-01' },
    { id: 14, title: 'British English Phonetics Masterclass', stars: 4, points: 80, rewards: ['Certificate'], enrolledDate: '2022-04-01', completedDate: '2022-05-01' },
    { id: 15, title: 'Shakespearean Literature Seminar', stars: 5, points: 100, rewards: ['Badge'], enrolledDate: '2022-05-01', completedDate: '2022-06-01' },
  ]);

  const [activeToggle, setActiveToggle] = useState('enrolled');
  const [selectedCourse, setSelectedCourse] = useState(null); // Track the selected course

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const handleCourseClick = (course) => {
    if (course.status === 'completed') {
      setSelectedCourse(course);
    }
  };

  const closePointsModal = () => {
    setSelectedCourse(null);
  };

  const renderCourses = () => {
    let filteredCourses;

    switch (activeToggle) {
      case 'enrolled':
        filteredCourses = enrolledCourses.filter(course => course.status === 'enrolled');
        break;
      case 'completed':
        filteredCourses = completedCourses;
        break;
      case 'in-progress':
        filteredCourses = enrolledCourses.filter(course => course.status === 'in-progress');
        break;
      default:
        filteredCourses = [];
    }

    return (
      <div className='hhhhh'>
      <div className="user-courses-container1">
        <div className="ucour-toggle-buttons-container1">
          <button
            className={`ucour-toggle-button enrolled ${activeToggle === 'enrolled' ? 'active' : ''}`}
            onClick={() => handleToggle('enrolled')}
          >
            Enrolled
          </button>
          <button
            className={`ucour-toggle-button completed ${activeToggle === 'completed' ? 'active' : ''}`}
            onClick={() => handleToggle('completed')}
          >
            Completed
          </button>
          <button
            className={`ucour-toggle-button in-progress ${activeToggle === 'in-progress' ? 'active' : ''}`}
            onClick={() => handleToggle('in-progress')}
          >
            In Progress
          </button>
        </div>
        <h3 className="course1-title">Courses {activeToggle.charAt(0).toUpperCase() + activeToggle.slice(1)}</h3>
        <ul className="courses1-list">
          {filteredCourses.map((course) => (
            <li
              key={course.id}
              className={`course1-item ${course.status === 'completed' ? 'completed-course' : ''}`}
              onClick={() => handleCourseClick(course)}
            >
              {course.title} {course.stars && renderStars(course.stars)}
            </li>
          ))}
        </ul>
        <Sidebar />
        {selectedCourse && (
          <PointsPage
            course={selectedCourse}
            closeModal={closePointsModal}
          />
        )}
      </div>
      </div>
    );
  };

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return <span className="stars-container">{stars}</span>;
  };

  return (
    <div>
      {renderCourses()}
    </div>
  );
};

export default Usercour;
