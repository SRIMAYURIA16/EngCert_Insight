
import React, { useState } from 'react';
import '../assets/css/Viewcourse.css'; 
import { Link } from 'react-router-dom';
const ViewCourse = ({ courses, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Outcome</th>
            <th style={{backgroundColor:'rgb(2,52,97)'}}>Course Cost</th>
            <th style={{backgroundColor:'rgb(2,52,97)'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.outcome}</td>
              <td>{course.cost}</td>
              <td>
                <button onClick={() => onEdit(course)}>Edit</button>
                <button onClick={() => onDelete(course.id)}>Delete</button>
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
