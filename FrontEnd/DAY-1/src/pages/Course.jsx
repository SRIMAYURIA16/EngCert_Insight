// Course.js
import React, { useState } from 'react';
import '../assets/css/Course.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Course = () => {
  const courses = [
    {
      name: "British English Grammar Mastery",
      duration: "8 weeks",
      description: "Embark on a transformative journey into the intricacies of British English grammar with our 8-week course. Designed for language enthusiasts and aspiring writers, this comprehensive program explores advanced grammar rules, sentence structures, and effective language usage in real-world scenarios. Elevate your writing and communication skills to a professional level, equipping yourself with the tools to express ideas with clarity and precision. The course provides a deep understanding of grammatical nuances, empowering you to navigate the subtleties of the English language effortlessly. Join us and master the art of grammatical finesse for enhanced language proficiency.",
      department: "Languages",
      rating: 4.5,
      cost: "$99.99",
    },
    {
      name: "British English Pronunciation Excellence",
      duration: "6 weeks",
      description: "Refine your British English pronunciation in our 6-week specialized course. Immerse yourself in the world of vowel sounds, consonant articulation, and personalized feedback for a nuanced and authentic accent. Perfect your pronunciation skills with the guidance of experienced instructors and interactive exercises. Whether you're a language enthusiast or a professional seeking to enhance your verbal communication, this course offers a tailored approach to mastering British English pronunciation. Join us and unlock the secrets to clear and confident spoken English.",
      department: "Languages",
      rating: 4.2,
      cost: "$89.99",
    },
    {
      name: "British Literature Appreciation",
      duration: "10 weeks",
      description: "Embark on a literary journey through the ages with our 10-week course on British Literature Appreciation. Immerse yourself in the works of iconic British authors, from Shakespeare to contemporary writers. Explore the rich cultural tapestry woven into the fabric of British literature and gain insights into historical and social contexts. This course is designed for literature enthusiasts and those eager to deepen their understanding of British culture through its literary treasures. Join us and discover the timeless beauty of British literature.",
      department: "Literature",
      rating: 4.8,
      cost: "$129.99",
    },
    {
      name: "British Business Writing Skills",
      duration: "12 weeks",
      description: "Elevate your business writing skills in British English with our 12-week course. Tailored for professionals and aspiring business communicators, this program focuses on composing effective emails, reports, and other business documents. Learn the art of clear and concise communication, ensuring your messages are impactful and professional. With practical exercises and real-world examples, you'll develop the confidence to navigate diverse business communication scenarios. Join us and enhance your written communication for success in the professional world.",
      department: "Business English",
      rating: 4.3,
      cost: "$109.99",
    },
    {
      name: "British English for Academic Purposes",
      duration: "8 weeks",
      description: "Prepare for academic success with our 8-week course on British English for Academic Purposes. Tailored for students, this program focuses on improving academic writing, critical thinking, and presentation skills in British English. Develop the ability to articulate ideas clearly and concisely, essential for academic excellence. With a combination of theoretical knowledge and practical application, you'll be well-prepared for the academic challenges ahead. Join us and excel in your academic journey with enhanced British English proficiency.",
      department: "Education",
      rating: 4.6,
      cost: "$94.99",
    },
    {
      name: "Advanced British English Vocabulary",
      duration: "6 weeks",
      description: "Expand your vocabulary and linguistic prowess with our 6-week course on Advanced British English Vocabulary. Delve into the nuances of sophisticated words, idioms, and expressions that add flair to your language. Whether you're a language enthusiast, professional, or simply aiming to elevate your communication skills, this course offers a comprehensive exploration of advanced vocabulary. Join us and enrich your command of the English language with an array of expressive and impactful words.",
      department: "Languages",
      rating: 4.4,
      cost: "$79.99",
    },
    {
      name: "British History: From Tudors to Modern Times",
      duration: "10 weeks",
      description: "Embark on a historical journey through the annals of British history with our 10-week course. Trace the fascinating evolution from Tudor reign to modern times, exploring key events, cultural shifts, and societal changes. Designed for history enthusiasts and those curious about the past, this course provides a comprehensive overview of British history. Join us and gain insights into the forces that shaped the nation and its enduring impact on the world.",
      department: "History",
      rating: 4.7,
      cost: "$119.99",
    },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleEnroll = (courseName) => {
    console.log(`Enrolling in ${courseName}`);
  };

  const renderCourses = () => {
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <table className="courses_table11">
        <thead>
          <tr>
            <th style={{color:'rgb(2,52,97)',backgroundColor:'aliceblue'}}>Course Name</th>
            <th style={{color:'rgb(2,52,97)',backgroundColor:'aliceblue'}}>Duration</th>
            <th style={{color:'rgb(2,52,97)',backgroundColor:'aliceblue'}}>Rating</th>
            <th style={{color:'rgb(2,52,97)',backgroundColor:'aliceblue'}}>Cost</th>
            <th style={{color:'rgb(2,52,97)',backgroundColor:'aliceblue'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={index} className="course_item">
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.rating}</td>
              <td>{course.cost}</td>
              <td>
                <Link to="/coursedes">
                  <button
                    className="view-description-button"
                    onClick={() => handleEnroll(course.name)}
                  >
                    View Description
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
        <h1 style={{color:'rgb(2,52,97)'}}>Courses Offered</h1>
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
