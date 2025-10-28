import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg"; // your footer logo
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Buildlinks Logo" />
          <h2>
            <span className="highlight">Build</span>links
          </h2>
        </div>
        <h3 className="footer-website">www.Buildlinks.com</h3>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* About */}
        <div className="footer-column">
          <h3>About</h3>
          <p>
            At Buildlink Zimbabwe, we believe in building stronger
            communities—one project at a time. Whether you're constructing a new
            home, fixing a burst pipe, or rewiring your office, finding a
            reliable expert shouldn't be complicated.
          </p>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Service</li>
            <li>Contact Us</li>
            <li>Log in</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-column">
          <h3>Working hours</h3>
          <p>
            Monday - Friday is <br /> 8:00 - 16:00
          </p>
        </div>

        {/* Get In Touch */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>
            <strong>Phone number :</strong> +263071453434
          </p>
          <p>
            <strong>Head Office</strong> <br />
            Harare, 231 Seke Road or <br /> Mutare, Masasa 212 st
          </p>
          <p>
            <strong>Email us</strong> <br />
            Buillinks@gmail.com
          </p>

          <div className="footer-icons">
            <FaWhatsapp className="footer-icon" />
            <IoMdMail className="footer-icon" />
            <FaLinkedinIn className="footer-icon" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Text */}
      <p className="footer-bottom">Copyright 2020 by Buillinks</p>
    </footer>
  );
};

export default Footer;
