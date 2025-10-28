import React from "react";
import "./Services.css";
import builderIcon from "../../assets/builder-emoji.png";
import plumbingIcon from "../../assets/plumbing-icon.png";
import electricIcon from "../../assets/electric-icon.png";
import companyIcon from "../../assets/company-icon.png";
import shieldIcon from "../../assets/shield-icon.png";

const Service = () => {
  return (
    <section className="service-section">
      {/* Title badge */}
      <div className="service-badge">
        <span>Our</span>
        <span className="highlight"> Service</span>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="service-heading">
        Connecting You to Trusted Builders, <br />
        <span className="highlight-text">
          Plumbers, and Electricians Across Zimbabwe
        </span>
      </h2>

      {/* Cards */}
      <div className="service-cards">
        {/* 1️⃣ General Construction */}
        <div className="service-card blue-card">
          <img src={builderIcon} alt="builder" className="service-icon" />
          <img src={shieldIcon} alt="shield" className="shield-icon" />
          <h3>
            General <span className="text-blue">Construction</span>
          </h3>
          <p>
            From residential builds to commercial projects — find expert
            builders you can trust
          </p>
        </div>

        {/* 2️⃣ Plumbing */}
        <div className="service-card white-card">
          <img src={plumbingIcon} alt="plumbing" className="service-icon black" />
          <img src={shieldIcon} alt="shield" className="shield-icon" />
          <h3>
            Plumbing <span className="text-blue">Service</span>
          </h3>
          <p>
            Fix leaks, install water systems, or complete full bathroom fittings
            with skilled plumbers.
          </p>
        </div>

        {/* 3️⃣ Electrical */}
        <div className="service-card white-card">
          <img src={electricIcon} alt="electrical" className="service-icon black" />
          <img src={shieldIcon} alt="shield" className="shield-icon" />
          <h3>
            Electrical <span className="text-blue">Work</span>
          </h3>
          <p>
            Hire certified electricians for installations, repairs, and wiring
            upgrades.
          </p>
        </div>

        {/* 4️⃣ Verified Service Companies */}
        <div className="service-card white-card">
          <img src={companyIcon} alt="company" className="service-icon black" />
          <img src={shieldIcon} alt="shield" className="shield-icon" />
          <h3>
            Verified Service <span className="text-blue">Companies</span>
          </h3>
          <ul>
            <li>Connect with registered companies for large-scale project</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
