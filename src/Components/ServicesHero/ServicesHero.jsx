import React, { useEffect, useRef } from "react";
import "./ServicesHero.css";
import bgImage from "../../assets/slide.jpg";
import worker1 from "../../assets/worker1.png";
import worker2 from "../../assets/worker2.png";
import worker3 from "../../assets/worker3.png";
// import flag from "../../assets/flag.png";

const ServicesHero = () => {
  const sliderRef = useRef(null);

  // Auto-slide animation
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideWidth = 280; // width of one card
    const slide = setInterval(() => {
      if (slider) {
        slider.scrollLeft += slideWidth;
        scrollAmount += slideWidth;

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 2500);

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="services-hero">
      <img src={bgImage} alt="Background" className="hero-bg" />

      <div className="hero-content">
        {/* LEFT SIDE TEXT */}
        <div className="hero-text">
          <h4>Welcome <span>to Buildslink</span></h4>
          <h1>
            Experts Near 
            {/* <br /> */}
            <span>You</span>
          </h1>
          <p>
            Where you find <span>the best of the best certified featured service providers like :</span>
            
          </p>
          <button className="hero-btn">Explore Services</button>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="hero-slider" ref={sliderRef}>
          <div className="slide-card">
            <img src={worker1} alt="Worker 1" />
            <h3>Plumbing</h3>
          </div>
          <div className="slide-card">
            <img src={worker2} alt="Worker 2" />
            <h3>Building</h3>
          </div>
          <div className="slide-card">
            <img src={worker3} alt="Worker 3" />
            <h3>Electricals</h3>
          </div>
        </div>
      </div>

      {/* BOTTOM-RIGHT FLAG */}
      {/* <img src={flag} alt="Flag" className="flag-icon" /> */}
    </section>
  );
};

export default ServicesHero;
