import React from "react";
import "./Mission.css";
import { FaEye, FaTrophy } from "react-icons/fa";

// Replace with your actual image paths
import workerImg from "../../assets/worker.jpg";
import bgRight from "../../assets/bg-right.jpg"; // blurred wiring background

const Mission = () => {
  return (
    <section className="mission-section">
      {/* Left angled blue background */}
      <div className="mission-bg-shape"></div>

      {/* Right background overlay */}
      <div
        className="mission-right-bg"
        style={{ backgroundImage: `url(${bgRight})` }}
      ></div>

      <h2 className="mission-title">Our mission</h2>

      <div className="mission-content">
        <div className="mission-image">
          <img src={workerImg} alt="worker" />
        </div>

        <div className="mission-cards">
          <div className="mission-card">
            <div className="icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be Zimbabwe’s leading digital platform for connecting people
              with trusted, skilled service providers in the construction,
              plumbing, and electrical sectors—empowering communities through
              accessible, reliable, and professional services.
            </p>
            <span className="quote">””</span>
          </div>

          <div className="mission-card">
            <div className="icon">
              <FaTrophy />
            </div>
            <h3>Our Mission</h3>
            <ul>
              <li>
                To simplify the way Zimbabweans find and hire
                construction-related professionals through a smart,
                user-friendly online marketplace.
              </li>
              <li>
                To support tradespeople and companies by giving them tools to
                grow their visibility, manage leads, and build their
                reputations.
              </li>
            </ul>
            <span className="quote">””</span>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <h3>290 k</h3>
          <p>Years Of Experience</p>
        </div>
        <div className="stat-card">
          <h3>1,5500</h3>
          <p>Project Done</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Success Rate</p>
        </div>
        <div className="stat-card">
          <h3>25</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
