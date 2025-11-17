import React from "react";
import "./ContactInfo.css";
import "./AboutInfo.css";
// import locationIcon from "../../assets/location.png";
// import callIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import clockIcon from "../../assets/clock.png";
// import supportImg from "../../assets/support.png";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-header">
        <h3>Contact Info</h3>
        <h2>
          Contact & <span>Join Together</span>
        </h2>
        <p>
          Our contact are always available 24/7 ready to help you on your services.
          Get in touch
        </p>
      </div>

      <div className="contact-info-grid">
        <div className="info-card">
          <img src={locationIcon} alt="location" />
          <h4>Visit Us At</h4>
          <p>1943 Street Building 5 Harare, 33 Street Mutare</p>
        </div>

        <div className="info-card">
          <img src={callIcon} alt="call" />
          <h4>Call Us On</h4>
          <p>Tel : 89 34545896</p>
          <p>Mob : 07123458445</p>
        </div>

        <div className="info-card">
          <img src={mailIcon} alt="mail" />
          <h4>Mail Address</h4>
          <p>Buildlinks@gmail.com</p>
        </div>

        <div className="info-card">
          <img src={clockIcon} alt="hours" />
          <h4>Opening Time</h4>
          <p>Mon - Fri : 8am - 6pm</p>
          <p>Sunday : closed</p>
        </div>
      </div>
    </section>
  );
};

const AboutUsInfo = () => {
  return (
    <section className="about-us-info">
      <div className="about-header">
        <div className="pill">ABOUT US</div>
        <h2>
          Reach & Get <span>Touch With Us!</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="chat-box">
          <div className="chat-icon">🎧</div>
          <h4>Chat with Us!</h4>
          <p>Chat with us for any service, job you want and the job is done</p>
          <button>Let's Chat</button>
        </div>

        <div className="about-image">
          <img src={supportImg} alt="Support" />
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your number" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export { ContactInfo, AboutUsInfo };
