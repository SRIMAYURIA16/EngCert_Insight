// // AddCoursePage.jsx

// import React, { useState } from 'react';
// import '../assets/css/AddCourse.css'; // Import the corresponding CSS file

// const AddCourse = () => {
//   const [formData, setFormData] = useState({
//     courseName: '',
//     courseDescription: '',
//     courseOutcome: '',
//     courseCost: '',
//     costDuration: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (!formData.courseName.trim()) {
//       isValid = false;
//       newErrors.courseName = 'Course Name is required';
//     }

//     if (!formData.courseDescription.trim()) {
//       isValid = false;
//       newErrors.courseDescription = 'Course Description is required';
//     }

//     if (!formData.courseOutcome.trim()) {
//       isValid = false;
//       newErrors.courseOutcome = 'Course Outcome is required';
//     }

//     if (!formData.courseCost.trim() || isNaN(formData.courseCost)) {
//       isValid = false;
//       newErrors.courseCost = 'Valid Course Cost is required';
//     }

//     if (!formData.costDuration.trim()) {
//       isValid = false;
//       newErrors.costDuration = 'Cost Duration is required';
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Form submission logic (e.g., send data to backend)
//       console.log('Form submitted:', formData);
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     validateForm();
//   };

//   return (
//     <div className="addcourse-admin-page-container">
//       <form className="addcourse-admin-form" onSubmit={handleSubmit}>
//         <h2>Add New Course</h2>

//         <div className="addcourse-admin-form-group">
//           <label htmlFor="courseName" className="addcourse-admin-label">
//             Course Name:
//           </label>
//           <input
//             type="text"
//             id="courseName"
//             name="courseName"
//             value={formData.courseName}
//             onChange={handleChange}
//             className="addcourse-admin-input"
//           />
//           {errors.courseName && (
//             <p className="addcourse-admin-error-message">{errors.courseName}</p>
//           )}
//         </div>

//         <div className="addcourse-admin-form-group">
//           <label htmlFor="courseDescription" className="addcourse-admin-label">
//             Course Description:
//           </label>
//           <textarea
//             id="courseDescription"
//             name="courseDescription"
//             value={formData.courseDescription}
//             onChange={handleChange}
//             className="addcourse-admin-textarea"
//           />
//           {errors.courseDescription && (
//             <p className="addcourse-admin-error-message">{errors.courseDescription}</p>
//           )}
//         </div>

//         <div className="addcourse-admin-form-group">
//           <label htmlFor="courseOutcome" className="addcourse-admin-label">
//             Course Outcome:
//           </label>
//           <textarea
//             id="courseOutcome"
//             name="courseOutcome"
//             value={formData.courseOutcome}
//             onChange={handleChange}
//             className="addcourse-admin-textarea"
//           />
//           {errors.courseOutcome && (
//             <p className="addcourse-admin-error-message">{errors.courseOutcome}</p>
//           )}
//         </div>

//         <div className="addcourse-admin-form-group">
//           <label htmlFor="courseCost" className="addcourse-admin-label">
//             Course Cost:
//           </label>
//           <input
//             type="text"
//             id="courseCost"
//             name="courseCost"
//             value={formData.courseCost}
//             onChange={handleChange}
//             className="addcourse-admin-input"
//           />
//           {errors.courseCost && (
//             <p className="addcourse-admin-error-message">{errors.courseCost}</p>
//           )}
//         </div>

//         <div className="addcourse-admin-form-group">
//           <label htmlFor="costDuration" className="addcourse-admin-label">
//             Cost Duration:
//           </label>
//           <input
//             type="text"
//             id="costDuration"
//             name="costDuration"
//             value={formData.costDuration}
//             onChange={handleChange}
//             className="addcourse-admin-input"
//           />
//           {errors.costDuration && (
//             <p className="addcourse-admin-error-message">{errors.costDuration}</p>
//           )}
//         </div>

//         <button type="submit" className="addcourse-admin-button">
//           Add Course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCourse;



// AddCoursePage.jsx

import React, { useState, useEffect } from 'react';
import '../assets/css/AddCourse.css'; 

const AddCourse = ({ onCourseAdded }) => {
  const initialFormData = {
    courseName: '',
    courseDescription: '',
    courseOutcome: '',
    courseCost: '',
    costDuration: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSuccessAnimationVisible, setIsSuccessAnimationVisible] = useState(false);

  useEffect(() => {
    if (isSuccessAnimationVisible) {
      const timeoutId = setTimeout(() => {
        setIsSuccessAnimationVisible(false);
        onCourseAdded();
        setFormData(initialFormData);
      }, 2000); 

      return () => clearTimeout(timeoutId);
    }
  }, [isSuccessAnimationVisible, onCourseAdded, initialFormData]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.courseName.trim()) {
            isValid = false;
            newErrors.courseName = 'Course Name is required';
          }
      
          if (!formData.courseDescription.trim()) {
            isValid = false;
            newErrors.courseDescription = 'Course Description is required';
          }
      
          if (!formData.courseOutcome.trim()) {
            isValid = false;
            newErrors.courseOutcome = 'Course Outcome is required';
          }
      
          if (!formData.courseCost.trim() || isNaN(formData.courseCost)) {
            isValid = false;
            newErrors.courseCost = 'Valid Course Cost is required';
          }
      
          if (!formData.costDuration.trim()) {
            isValid = false;
            newErrors.costDuration = 'Cost Duration is required';
          }
      
          setErrors(newErrors);
          return isValid;

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSuccessAnimationVisible(true);
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  return (
    <div className="addcourse-admin-page-container">
      <form className="addcourse-admin-form" onSubmit={handleSubmit}>
        <h2 style={{color:'aliceblue'}}>Add New Course</h2>

        <div className="addcourse-admin-form-group">
           <label htmlFor="courseName" className="addcourse-admin-label">
             Course Name:
           </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.courseName && (
            <p className="addcourse-admin-error-message">{errors.courseName}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="courseDescription" className="addcourse-admin-label">
            Course Description:
          </label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
            className="addcourse-admin-textarea"
          />
          {errors.courseDescription && (
            <p className="addcourse-admin-error-message">{errors.courseDescription}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="courseOutcome" className="addcourse-admin-label">
            Course Outcome:
          </label>
          <textarea
            id="courseOutcome"
            name="courseOutcome"
            value={formData.courseOutcome}
            onChange={handleChange}
            className="addcourse-admin-textarea"
          />
          {errors.courseOutcome && (
            <p className="addcourse-admin-error-message">{errors.courseOutcome}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="courseCost" className="addcourse-admin-label">
            Course Cost:
          </label>
          <input
            type="text"
            id="courseCost"
            name="courseCost"
            value={formData.courseCost}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.courseCost && (
            <p className="addcourse-admin-error-message">{errors.courseCost}</p>
          )}
        </div>

        <div className="addcourse-admin-form-group">
          <label htmlFor="costDuration" className="addcourse-admin-label">
            Cost Duration:
          </label>
          <input
            type="text"
            id="costDuration"
            name="costDuration"
            value={formData.costDuration}
            onChange={handleChange}
            className="addcourse-admin-input"
          />
          {errors.costDuration && (
            <p className="addcourse-admin-error-message">{errors.costDuration}</p>
          )}
        </div>

        <button type="submit" className="addcourse-admin-button">
          Add Course
        </button>

        {isSuccessAnimationVisible && (
          <div className="addcourse-admin-success-animation">Course Added Successfully!</div>
        )}
      </form>
    </div>
  );
};

export default AddCourse;
