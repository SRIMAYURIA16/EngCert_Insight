import React, { useState, useEffect } from 'react';
import '../assets/css/Course.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/course/get')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleEnroll = (courseId) => {
    if (!userId) {
      console.error('User ID not available');
      return;
    }

    axios.post(`http://localhost:8081/user/enroll/${userId}/${courseId}`)
      .then(response => {
        console.log('Enrolled successfully:', response.data);
        // You can update the UI or show a success message here
      })
      .catch(error => {
        console.error('Error enrolling:', error);
        // Handle error, show error message, etc.
      });
  };

  const renderCourses = () => {
    const filteredCourses = courses.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <table className="courses_table11">
        <thead>
          <tr>
            <th style={{ color: 'rgb(2,52,97)', backgroundColor: 'aliceblue' }}>Course Name</th>
            <th style={{ color: 'rgb(2,52,97)', backgroundColor: 'aliceblue' }}>Duration</th>
            <th style={{ color: 'rgb(2,52,97)', backgroundColor: 'aliceblue' }}>Description</th>
            <th style={{ color: 'rgb(2,52,97)', backgroundColor: 'aliceblue' }}>Cost</th>
            <th style={{ color: 'rgb(2,52,97)', backgroundColor: 'aliceblue' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={index} className="course_item">
              <td>{course.courseName}</td>
              <td>{course.duration}</td>
              <td>{course.description}</td>
              <td>{course.cost}</td>
              <td>
                <Link to={`/coursedes/${course.courseId}`}>
                  <button className="view-description-button">
                    Enroll
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="whole">
      <div className="courses_container">
        <h1 style={{ color: 'rgb(2,52,97)' }}>Courses Offered</h1>
        <input
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {renderCourses()}
      </div>
      <Navbar />
    </div>
  );
};

export default Course;
