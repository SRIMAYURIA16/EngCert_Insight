// ViewCourse.jsx
import React, { useState, useEffect } from 'react';
import '../assets/css/Viewcourse.css'; 
import { Link } from 'react-router-dom';

const ViewCourse = ({ onEdit, onDelete }) => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8081/course/get');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = async (course) => {
    onEdit(course); // Pass the entire course object to the onEdit function
  };

  const handleDelete = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:8081/course/delete/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If deletion is successful, update the course list
        setCourses((prevCourses) => prevCourses.filter((course) => course.courseId !== courseId));
      } else {
        console.error('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>View Courses</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='adminview-view-course-container '>
        <table className="admin-view-course-table">
          <thead>
            <tr>
              <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Name</th>
              <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Description</th>
              <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Duration</th>
              <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Cost</th>
              <th style={{backgroundColor:'rgb(2,52,97)'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseName}</td>
                <td>{course.description}</td>
                <td>{course.duration}</td>
                <td>{course.cost}</td>
                <td>
                  <button onClick={() => handleEdit(course)}>Edit</button>
                  <button onClick={() => handleDelete(course.courseId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-course-button">
          <Link to="/addcourse"><button style={{color:'aliceblue',backgroundColor:'rgb(2,52,97)'}}>Add More Courses</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
