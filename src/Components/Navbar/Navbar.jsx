
// import React from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.jpg"; // replace with real logo

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Buillink Logo" />
//       </div>
//       <ul className="nav-links">
//         <li>Home</li>
//         <li>Services</li>
//         <li>About Us</li>
//         <li>Projects</li>
//         <li>Contact Us</li>
//       </ul>
//       <div className="nav-buttons">
        
//         <button className="btn-signup">Register</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;







import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import profile from "../../assets/profile.jpg"; // your right-side image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="BuildLink Logo" />
      </div>

      {/* Middle Links */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Service</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>

      {/* Right Buttons */}
      <div className="navbar-right">
        <button className="register-btn">Register</button>
        <div className="profile-pic">
          <img src={profile} alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
