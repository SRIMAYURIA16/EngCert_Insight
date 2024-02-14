import React, { useState } from 'react';
import ViewCourse from '../pages/Viewcourse.jsx';
import "../assets/css/Adminedit.css";

const View = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleEdit = async (course) => {
    try {
      const response = await fetch(`http://localhost:8081/course/get/${course.courseId}`);
      
      if (response.ok) {
        const data = await response.json();
        const { courseName, description, cost, duration } = data;
        setEditingCourse({ courseName, description, cost, duration, id: course.courseId });
      } else {
        console.error('Failed to fetch course details');
      }
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };
  
  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8081/course/update/${editingCourse.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingCourse),
      });

      if (response.ok) {
        setCourses(prevCourses =>
          prevCourses.map(course => (course.id === editingCourse.id ? editingCourse : course))
        );
        setEditingCourse(null);
      } else {
        console.error('Failed to update course');
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:8081/course/delete/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
      } else {
        console.error('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className='admin-edit-course-container'>
      <h1>Admin Dashboard</h1>
      {editingCourse ? (
        <div>
          <h2>Edit Course</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <label>
              Course Name:
              <input
                type="text"
                value={editingCourse.courseName}
                onChange={(e) => setEditingCourse({ ...editingCourse, courseName: e.target.value })}
              />
            </label>
            <label>
              Course Description:
              <input
                type="text"
                value={editingCourse.description}
                onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
              />
            </label>
            <label>
              Course Duration:
              <input
                type="text"
                value={editingCourse.duration}
                onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
              />
            </label>
            <label>
              Course Cost:
              <input
                type="text"
                value={editingCourse.cost}
                onChange={(e) => setEditingCourse({ ...editingCourse, cost: e.target.value })}
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingCourse(null)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <ViewCourse courses={courses} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default View;
