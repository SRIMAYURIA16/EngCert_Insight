// // Coursedes.jsx
// import React, { useState } from 'react';
// import '../assets/css/Coursedes.css';
// import EnrollmentForm from './EnrollmentForm';

// function Coursedes() {
//   const [isPopupVisible, setPopupVisibility] = useState(false);
//   const [courseName, setCourseName] = useState("British English Grammar Mastery"); // Set the default course name

//   const handleEnrollClick = () => {
//     setPopupVisibility(true);
//   };

//   const handlePopupClose = () => {
//     setPopupVisibility(false);
//   };

//   return (
//     <>
//       <div className={`Coursedes-container ${isPopupVisible ? 'popup-visible' : ''}`}>
//         <div className='Coursedes-content'>
//           <div className='Coursedes-details'>
//             <div id="coursedes-p">
//               <h2 className="animated-title">British English Grammar Mastery</h2>
//               <h3>Description</h3>
//               <p>Embark on a transformative 8-week journey into the intricate realm of British English grammar. Tailored for language enthusiasts and aspiring writers, this comprehensive program delves into advanced grammar rules, diverse sentence structures, and effective language usage in real-world scenarios. Elevate your writing and communication skills to a professional echelon, arming yourself with the tools to express ideas with unparalleled clarity and precision....</p>
//               <h3>Outcome</h3>
//               <p>Unlock the nuances of language with the 'British English Grammar Mastery' course. Refine your writing prowess as you master articulate expression in essays and reports. The curriculum, centered around British English subtleties, integrates critical analyses of renowned texts, enriching vocabulary and fostering rhetorical awareness. Practical applications ensure seamless communication across diverse settings, preparing learners for language certification. Regular assessments validate grammar proficiency, culminating in a comprehensive skill set for confident, precise communication in both professional and everyday contexts.</p>
//               <div className="Coursedes-buttons-container">
//                 <button type="button" onClick={handleEnrollClick} className="Coursedes-enroll-button">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isPopupVisible && (
//         <div className="Coursedes-popup">
//           <div className="Coursedes-popup-content">
//             <span className="Coursedes-close" onClick={handlePopupClose}>&times;</span>
//             <EnrollmentForm courseName={courseName} onClose={handlePopupClose} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Coursedes;





// Coursedes.jsx
import React, { useState } from 'react';
import '../assets/css/Coursedes.css';
import EnrollmentForm from './EnrollmentForm';

function Coursedes() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [courseName, setCourseName] = useState("British English Grammar Mastery");

  const handleEnrollClick = () => {
    setPopupVisibility(true);
  };

  const handlePopupClose = () => {
    setPopupVisibility(false);
  };

  return (
    <div className="Coursedes-container">
      <div className='Coursedes-content'>
        <div className='Coursedes-details'>
          <div id="coursedes-p">
            <h2 className="animated-title">{courseName}</h2>
            <h3>Description</h3>
               <p>Embark on a transformative 8-week journey into the intricate realm of British English grammar. Tailored for language enthusiasts and aspiring writers, this comprehensive program delves into advanced grammar rules, diverse sentence structures, and effective language usage in real-world scenarios. Elevate your writing and communication skills to a professional echelon, arming yourself with the tools to express ideas with unparalleled clarity and precision....</p>
               <h3>Outcome</h3>
               <p>Unlock the nuances of language with the 'British English Grammar Mastery' course. Refine your writing prowess as you master articulate expression in essays and reports. The curriculum, centered around British English subtleties, integrates critical analyses of renowned texts, enriching vocabulary and fostering rhetorical awareness. Practical applications ensure seamless communication across diverse settings, preparing learners for language certification. Regular assessments validate grammar proficiency, culminating in a comprehensive skill set for confident, precise communication in both professional and everyday contexts.</p>
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
            <EnrollmentForm courseName={courseName} onClose={handlePopupClose} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Coursedes;
