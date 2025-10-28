import React from "react";
import { FaSearch, FaUserTie, FaMapMarkerAlt } from "react-icons/fa";
import "./Search.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="input-group">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="input-group">
          <FaUserTie className="icon" />
          <select>
            <option value="">Builders</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="builder">Builder</option>
          </select>
        </div>
        <div className="input-group">
          <FaMapMarkerAlt className="icon" />
          <select>
            <option value="">Location</option>
            <option value="harare">Harare</option>
            <option value="bulawayo">Bulawayo</option>
            <option value="gweru">Gweru</option>
          </select>
        </div>
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;