import React from "react";
import "./TeamSection.css";

import worker1 from "../../assets/worker1.png";
import worker2 from "../../assets/worker2.png";
import worker3 from "../../assets/worker3.png";

// Icon images (replace with your actual icon files)
import builderIcon from "../../assets/builder-emoji.png";
import plumberIcon from "../../assets/plumbing-icon.png";
import electricianIcon from "../../assets/electric-icon.png";

// Social media icon images (replace with your own images)
import youtubeIcon from "../../assets/youtube.png";
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <div className="team-pill">Our Team</div>
        <h2>
          Meet our <span>team members</span>
        </h2>
        <p>Each from each department</p>
      </div>

      <div className="team-grid">
        {/* Member 1 */}
        <div className="team-card">
          <div className="team-img">
            <img src={worker1} alt="Allan Masango" />
          </div>
          <h3 className="team-name">Allan Masango</h3>
          <div className="team-role">
            <img src={builderIcon} alt="Builder" className="role-icon" />
            <span>Builders</span>
          </div>
          <div className="social-icons">
            <img src={youtubeIcon} alt="YouTube" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-card">
          <div className="team-img">
            <img src={worker2} alt="Tadiwa Moyo" />
          </div>
          <h3 className="team-name">Tadiwa Moyo</h3>
          <div className="team-role">
            <img src={plumberIcon} alt="Plumber" className="role-icon" />
            <span>Plumbers</span>
          </div>
          <div className="social-icons">
            <img src={youtubeIcon} alt="YouTube" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-card">
          <div className="team-img">
            <img src={worker3} alt="Kudzi Maninji" />
          </div>
          <h3 className="team-name">Kudzi Maninji</h3>
          <div className="team-role">
            <img src={electricianIcon} alt="Electrician" className="role-icon" />
            <span>Electricians</span>
          </div>
          <div className="social-icons">
            <img src={youtubeIcon} alt="YouTube" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>
      </div>

      <div className="see-more-btn">
        <button>See more</button>
      </div>
    </section>
  );
};

export default TeamSection;

