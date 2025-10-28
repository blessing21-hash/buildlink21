import React from "react";
import "./AboutHero.css";
import builder from "../../assets/builder.png"; // use the builder image shown in your design

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <p className="welcome-text">Welcome to Buildlinks</p>
        <h1 className="about-title">
          About <span>Us</span>
        </h1>
        <h2 className="about-subtitle">
          Where <span>Our links</span>
        </h2>
        <p className="about-description">
          <span className="bold-blue">Certified</span> builders, plumbers, and electricians across{" "}
          <span className="blue">Zimbabwe</span> — compare, connect, and hire with confidence.
        </p>
      </div>
      <div className="about-hero-image">
        <img src={builder} alt="Builder" />
      </div>
    </section>
  );
};

export default AboutHero;
