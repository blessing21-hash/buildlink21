import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactInfoCards.css";

export default function ContactInfoCards() {
  return (
    <section className="contact-cards bg-[#0c3c60] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="cards-container max-w-6xl mx-auto">
        <h2 className="cards-title">Contact & Join Together</h2>
        <p className="cards-subtitle">
          Our contacts are always available 24/7 ready to help you with your services. Get in touch.
        </p>
        <div className="cards-grid">
          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <p className="card-title">Location</p>
            <p className="card-text">1943 Street Buildlink 5 Harare, 33 Street Mutare</p>
          </div>
          <div className="card">
            <FaPhone className="icon" />
            <p className="card-title">24/7 Service</p>
            <p className="card-text">Tel: 89 543456896</p>
            <p className="card-text">Mob: 07123454845</p>
          </div>
          <div className="card">
            <FaEnvelope className="icon" />
            <p className="card-title">Drop a Line</p>
            <p className="card-text">Buildlinks@gmail.com</p>
          </div>
          <div className="card">
            <FaClock className="icon" />
            <p className="card-title">Office Hours</p>
            <p className="card-text">
              Mon - Fri: 8am - 6pm <br /> Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
