import React from "react";
import "./WhoWeAre.css";
import aboutImg from "../../assets/about.png"; // replace with your real image
import { FaUsers, FaTools, FaHandshake } from "react-icons/fa";

function WhoWeAre() {
  return (
    <section className="who-we-are">

        <div className="who-image">
        <img src={aboutImg} alt="About Buillink" />
      </div>

      <div className="who-content">
        <h1>About <span>Us</span></h1>

        <h2>Who We <span>Are</span></h2>
        <p>
          At <span>Buildlink Zimbabwe</span>, we believe in building stronger communities—one 
          project at a time.Whether you're constructing a new home, fixing a burst 
          pipe, or <span>rewiring your office</span>
        </p>

        <p>Our service are cheap and we accept credit ,discount. Priceses that affordable for you</p>

        <p>Our builder, plumber and electriction  are relable and trustworth with experience</p>

        
        {/* <div className="who-stats">
          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <h3>200+</h3>
            <p>Trusted Providers</p>
          </div>
          <div className="stat-box">
            <FaTools className="stat-icon" />
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <FaHandshake className="stat-icon" />
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div> */}
      </div>

      
    </section>
  );
}

export default WhoWeAre;
