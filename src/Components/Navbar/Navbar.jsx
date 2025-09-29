
import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg"; // replace with real logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Buillink Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-buttons">
        
        <button className="btn-signup">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
