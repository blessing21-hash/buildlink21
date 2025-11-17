import React from "react";
import "./Gallery.css";
import { Link } from "react-router-dom"; 
import galleryImg from "../../assets/gallery.jpg"; // change to your actual image

const Gallery = () => {
  return (
    <section className="gallery-section">
        <img src={galleryImg} alt="Gallery" className="gallery-image" />
      <div className="gallery-overlay">
      
        <h2>
          See Our Gallery <br /> With Our <span>Project</span>
        </h2>
        {/* <button className="gallery-btn">Gallery</button> */}


        <Link to="/gallery" className="gallery-btn">
          Gallery
        </Link>
      </div>

      
{/* 
      <img src={galleryImg} alt="Gallery" className="gallery-image" /> */}
    </section>
  );
};

export default Gallery;
