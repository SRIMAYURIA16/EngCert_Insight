// ParentComponent.jsx
import React, { useState } from 'react';
import ViewCourse from '../pages/Viewcourse.jsx';
import "../assets/css/Adminedit.css";

const View = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Course 1', description: 'Description 1', outcome: 'Outcome 1', cost: '$100' },
    { id: 2, name: 'Course 2', description: 'Description 2', outcome: 'Outcome 2', cost: '$150' },
    { id: 3, name: 'Course 3', description: 'Description 3', outcome: 'Outcome 3', cost: '$150' },
    { id: 4, name: 'Course 4', description: 'Description 4', outcome: 'Outcome 4', cost: '$150' },
    { id: 5, name: 'Course 5', description: 'Description 5', outcome: 'Outcome 5', cost: '$150' },
    { id: 6, name: 'Course 6', description: 'Description 6', outcome: 'Outcome 6', cost: '$150' },
    { id: 7, name: 'Course 7', description: 'Description 7', outcome: 'Outcome 7', cost: '$150' },
    // Add more courses as needed
  ]);

  const [editingCourse, setEditingCourse] = useState(null);

  const handleEdit = (course) => {
    setEditingCourse(course);
  };

  const handleSave = () => {
    setCourses((prevCourses) =>
      prevCourses.map((c) => (c.id === editingCourse.id ? editingCourse : c))
    );
    setEditingCourse(null);
  };

  const handleDelete = (courseId) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
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
                value={editingCourse.name}
                onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}
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
              Course Outcome:
              <input
                type="text"
                value={editingCourse.outcome}
                onChange={(e) => setEditingCourse({ ...editingCourse, outcome: e.target.value })}
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
