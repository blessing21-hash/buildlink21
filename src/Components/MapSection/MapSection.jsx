import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import MapPlaceholder from "../../assets/map.jpg";
import "./MapSection.css";

export default function MapSection() {
  return (
    <section className="map-section relative h-[300px] sm:h-[400px] px-4 sm:px-0">
      <img src={MapPlaceholder} alt="map" className="map-image" />
      <div className="marker-container">
        <div className="marker">
          <FaMapMarkerAlt className="marker-icon" />
        </div>
      </div>
    </section>
  );
}
