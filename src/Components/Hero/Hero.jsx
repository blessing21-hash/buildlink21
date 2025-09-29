import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.jpg"; // replace with real bg

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay">
        <h1><span>Welcome</span> to Buildlinks</h1>
        <h2>Experts Near <span>You</span></h2>
        <p> <span>Certified</span> builders, plumbers, and electricians across <span>Zimbabwe</span> — compare, connect, and hire with confidence.</p>

        <div className="hero-search">
          <input type="text" placeholder="Search | " />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;