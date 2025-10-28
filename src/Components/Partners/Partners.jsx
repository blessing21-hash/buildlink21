import React from "react";
import "./Partners.css";

// Import your partner logos (replace with real images in assets)
import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/partner2.jpg";
import partner3 from "../../assets/partner3.jpg";
import partner4 from "../../assets/partner4.jpg";

function Partners() {
  const partners = [partner1, partner2, partner3, partner4];

  return (
    <section className="partners">
      <h1>Featured Proviers</h1>
      <h2>Where <span>Our Links</span></h2>
      <div className="partner-logos">
        {partners.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
