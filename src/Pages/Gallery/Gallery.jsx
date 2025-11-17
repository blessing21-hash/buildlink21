

import React from "react";

import tall1 from "../../assets/pic1.jpg";     // tall left
import wide1 from "../../assets/pic2.jpg";     // wide right
import small1 from "../../assets/pic3.jpg";    // small
import small2 from "../../assets/pic4.jpg";    // small
import small3 from "../../assets/pic6.jpg";    // small
import small4 from "../../assets/pic5.jpg";    // small
import bigFinal from "../../assets/galle.jpg"; // final big wide image

export default function GalleryPage() {
  return (
    <div className="w-full">

      {/* HERO — EXACTLY LIKE YOUR DESIGN */}
      <section
        className="relative h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bigFinal})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-left text-white px-8 md:px-20 max-w-3xl">
          <p className="text-sm md:text-base">Welcome to Buildlinks</p>

          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            OUR GALLERY
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-blue-300">
            Where Our Link
          </h2>

          <p className="text-lg md:text-xl mt-4 leading-relaxed max-w-xl">
            Certified builders, plumbers, and electricians across Zimbabwe — compare, 
            connect, and hire with confidence.
          </p>
        </div>
      </section>

      {/* MAIN GALLERY */}
      <section className="py-12 md:py-16 px-4 md:px-10 lg:px-24">

        {/* Blue BUTTON */}
        <div className="w-full flex justify-center mb-10">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow">
            Gallery
          </button>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <img
            src={tall1}
            alt=""
            className="w-full h-[420px] object-cover rounded-xl"
          />
          <img
            src={wide1}
            alt=""
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* ROW 2 — 4 SMALL IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <img src={small1} className="h-[220px] w-full object-cover rounded-xl" alt="" />
          <img src={small2} className="h-[220px] w-full object-cover rounded-xl" alt="" />
          <img src={small3} className="h-[220px] w-full object-cover rounded-xl" alt="" />
          <img src={small4} className="h-[220px] w-full object-cover rounded-xl" alt="" />
        </div>

        {/* ROW 3 — FULL WIDTH BIG IMAGE */}
        <img
          src={bigFinal}
          alt=""
          className="w-full h-[380px] md:h-[450px] object-cover rounded-xl"
        />
      </section>
    </div>
  );
}
