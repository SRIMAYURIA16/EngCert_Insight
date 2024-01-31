import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/homepage.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="circular-oval">
        <div className="animated-text-container">
          <div className="animated-text">
            <h2 style={{ color: 'rgb(2, 52, 95)' }}>
              "Welcome to AngloCertify, where language dreams take flight. Unleash your potential with our British English certification courses. Let the learning adventure begin!"
            </h2>
          </div>
          <div className="buttons-container">
            <Link to="/courses"><button className="explore-button">Explore Courses</button></Link>
            <Link to="/why"><button className="why-us-button">Why Us?</button></Link>
          </div>
        </div>
      </div>
      <div className="home-page">
        <Navbar />
      </div>
    </>
  );
}

export default Home;
