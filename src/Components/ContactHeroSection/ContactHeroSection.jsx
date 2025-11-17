// import React from "react";
// import ContactHero from "../../assets/contact-hero.jpg";
// import "./ContactHeroSection.css";

// export default function ContactHeroSection() {
//   return (
//     <section
//       className="contact-hero relative h-[50vh] sm:h-[60vh] flex items-center justify-center"
//       style={{ backgroundImage: `url(${ContactHero})` }}
//     >
//       <div className="overlay"></div>
//       <div className="hero-content text-center text-white px-4">
//         <h2 className="welcome">Welcome to Buildlinks</h2>
//         <h1 className="title">Contact Us</h1>
//         <p className="subtitle">
//           <span className="highlight">Certified</span> builders, plumbers, and electricians across{" "}
//           <span className="highlight">Zimbabwe</span> — compare, connect, and hire with confidence.
//         </p>
//       </div>
//     </section>
//   );
// }





import React from "react";
import "./AboutHero.css";
import builder from "../../assets/builder.png"; // use the builder image shown in your design

const ContactHeroSection = () => {
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

export default ContactHeroSection;
