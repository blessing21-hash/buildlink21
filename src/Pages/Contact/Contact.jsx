



// import React from "react";

// // import Footer from "../../Components/Footer/Footer";
// import ContactAbout from "../../Components/ContactAbout/ContactAbout";






// function Contact() {
//   return (
//     <>
//      <ContactAbout />
//       {/* <Footer /> */}

//     </>
//   );
// }

// export default Contact;






// import React from "react";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaComments, FaPaperPlane } from "react-icons/fa";
// import ContactHero from "../../assets/contact-hero.jpg";
// import MapPlaceholder from "../../assets/map.jpg";

// export default function ContactPage() {
//   return (
//     <div className="w-full">
//       <section
//         className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-cover bg-center mt-16"
//         style={{ backgroundImage: `url(${ContactHero})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h2 className="text-sm sm:text-base lg:text-lg font-light">Welcome to Buildlinks</h2>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Contact Us</h1>
//           <p className="text-base sm:text-lg lg:text-xl mt-4 max-w-3xl mx-auto">
//             <span className="text-blue-400 font-semibold">Certified</span> builders, plumbers, and electricians across <span className="text-blue-400 font-semibold">Zimbabwe</span> — compare, connect, and hire with confidence.
//           </p>
//         </div>
//       </section>

//       <section className="bg-[#0c3c60] text-white py-12 sm:py-16 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10">
//             Contact & Join Together
//           </h2>
//           <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
//             Our contacts are always available 24/7 ready to help you with your
//             services. Get in touch.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
//             <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
//               <FaMapMarkerAlt className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
//               <p className="font-bold text-base sm:text-lg mb-2">Location</p>
//               <p className="text-xs sm:text-sm">
//                 1943 Street Buildlink 5 Harare, 33 Street Mutare
//               </p>
//             </div>
//             <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
//               <FaPhone className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
//               <p className="font-bold text-base sm:text-lg mb-2">24/7 Service</p>
//               <p className="text-xs sm:text-sm">Tel: 89 543456896</p>
//               <p className="text-xs sm:text-sm">Mob: 07123454845</p>
//             </div>
//             <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
//               <FaEnvelope className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
//               <p className="font-bold text-base sm:text-lg mb-2">Drop a Line</p>
//               <p className="text-xs sm:text-sm">Buildlinks@gmail.com</p>
//             </div>
//             <div className="bg-white text-black rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
//               <FaClock className="text-blue-500 text-2xl sm:text-3xl mx-auto mb-3" />
//               <p className="font-bold text-base sm:text-lg mb-2">Office Hours</p>
//               <p className="text-xs sm:text-sm">
//                 Mon - Fri: 8am - 6pm <br /> Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           <div className="bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md text-center hover:shadow-lg transition">
//             <FaComments className="text-blue-600 text-4xl sm:text-5xl mx-auto mb-4" />
//             <h3 className="text-lg sm:text-xl font-bold">Chat with Us!</h3>
//             <p className="mt-2 text-sm sm:text-base text-gray-700">
//               Chat with us for any service, job you want and the job is done.
//             </p>
//             <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
//               <FaComments />
//               Let's Chat
//             </button>
//           </div>

//           <div>
//             <h3 className="text-xl sm:text-2xl font-bold mb-6">
//               Reach & Get <span className="text-blue-600">Touch With Us!</span>
//             </h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Number"
//                 className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <textarea
//                 placeholder="Message"
//                 className="w-full border rounded-lg px-4 py-3 h-32 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2"
//               >
//                 <FaPaperPlane />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className="relative h-[300px] sm:h-[400px] px-4 sm:px-0">
//         <img
//           src={MapPlaceholder}
//           alt="map"
//           className="w-full h-full object-cover rounded-lg"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full shadow-lg flex items-center justify-center">
//             <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }














// import React from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaComments,
//   FaPaperPlane,
//   FaHeadphones,
// } from "react-icons/fa";

// import ContactHero from "../../assets/contact-hero.jpg";
// import LadyImage from "../../assets/lady.jpg"; 
// import MapPlaceholder from "../../assets/map.jpg";

// export default function ContactPage() {
//   return (
//     <div className="w-full">

//       {/* HERO SECTION — EXACT LIKE DESIGN */}
//       <section
//         className="relative h-[75vh] flex items-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${ContactHero})` }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative z-10 text-left text-white px-6 sm:px-10 max-w-3xl mt-20">
//           <p className="text-sm sm:text-base">Welcome to Buildlinks</p>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-1">
//             Contact Us
//           </h1>

//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
//             Where <span className="text-blue-400">Our links</span>
//           </h2>

//           <p className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
//             <span className="text-blue-400 font-semibold">Certified</span> builders,
//             plumbers, and electricians across{" "}
//             <span className="text-blue-400 font-semibold">Zimbabwe</span> —
//             compare, connect, and hire with confidence.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT INFO SECTION */}
//       <section className="bg-[#0c3c60] text-white py-16 px-4">
//         <div className="max-w-6xl mx-auto text-center">

//           {/* Small TOP ICON */}
//           <div className="flex justify-center mb-6">
//             <div className="flex items-center gap-2 text-white">
//               <FaMapMarkerAlt className="text-xl text-blue-300" />
//               <span className="text-xl">Contact Info</span>
//             </div>
//           </div>

//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//             Contact & Join Together
//           </h2>

//           <p className="max-w-2xl mx-auto text-sm sm:text-base mb-12">
//             Our contacts are always available 24/7 ready to help you on
//             your services. Get in touch.
//           </p>

//           {/* 4 INFO BOXES */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* LOCATION */}
//             <div className="bg-white text-black rounded-xl p-8 shadow-md text-center">
//               <FaMapMarkerAlt className="text-blue-500 text-4xl mx-auto mb-3" />
//               <p className="font-bold text-lg mb-1">Location</p>
//               <p>1943 Street Buildlink 5 Harare, 33 Street Mutare</p>
//             </div>

//             {/* PHONE */}
//             <div className="bg-white text-black rounded-xl p-8 shadow-md text-center">
//               <FaPhone className="text-blue-500 text-4xl mx-auto mb-3" />
//               <p className="font-bold text-lg mb-1">24/7 Service</p>
//               <p>Tel: 89 543456896</p>
//               <p>Mob: 07123454845</p>
//             </div>

//             {/* EMAIL */}
//             <div className="bg-white text-black rounded-xl p-8 shadow-md text-center">
//               <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-3" />
//               <p className="font-bold text-lg mb-1">Mail Address</p>
//               <p>Buildlinks@gmail.com</p>
//             </div>

//             {/* HOURS */}
//             <div className="bg-white text-black rounded-xl p-8 shadow-md text-center">
//               <FaClock className="text-blue-500 text-4xl mx-auto mb-3" />
//               <p className="font-bold text-lg mb-1">Opening Time</p>
//               <p>Mon - Fri: 8am - 6pm</p>
//               <p>Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT & CHAT SECTION */}
//       <section className="py-20 bg-white px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* ABOUT TITLE */}
//           <div className="text-center mb-12">
//             <span className="text-blue-500 font-bold tracking-wider text-sm">
//               ABOUT US
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold mt-2">
//               Reach & Get <span className="text-blue-600">Touch With Us !</span>
//             </h2>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-12 items-center">
            
//             {/* Chat Box */}
//             <div className="bg-blue-100 rounded-xl p-8 shadow-md text-center">
//               <FaHeadphones className="text-blue-600 text-5xl mx-auto mb-4" />
//               <h3 className="text-2xl font-bold">Chat with Us!</h3>
//               <p className="mt-2 text-gray-700">
//                 Chat with us for any service, job you want and the job is done.
//               </p>
//               <button className="mt-6 bg-blue-600 text-white px-7 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
//                 Let's Chat
//               </button>
//             </div>

//             {/* Center Lady Image */}
//             <div className="flex justify-center">
//               <img
//                 src={LadyImage}
//                 alt="Support Lady"
//                 className="rounded-xl w-full h-[420px] object-cover shadow-md"
//               />
//             </div>

//             {/* Contact Form */}
//             <div>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full border rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full border rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Number"
//                   className="w-full border rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-500"
//                 />
//                 <textarea
//                   placeholder="Message"
//                   className="w-full border rounded-lg px-5 py-3 h-32 focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
//                 >
//                   <FaPaperPlane /> Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAP SECTION */}
//       <section className="relative h-[350px] sm:h-[420px] px-4">
//         <img
//           src={MapPlaceholder}
//           alt="Map"
//           className="w-full h-full object-cover rounded-xl"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <div className="w-14 h-14 bg-red-600 rounded-full shadow-lg flex items-center justify-center">
//             <FaMapMarkerAlt className="text-white text-2xl" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

















import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaHeadphones,
} from "react-icons/fa";

import ContactHero from "../../assets/contact-hero.jpg";
import LadyImage from "../../assets/lady.jpg";
import MapPlaceholder from "../../assets/map.jpg";

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-left text-white px-4 sm:px-8 md:px-12 max-w-2xl mt-10 sm:mt-20">
          <p className="text-xs sm:text-sm md:text-base">Welcome to Buildlinks</p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-1 leading-tight">
            Contact Us
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mt-2">
            Where <span className="text-blue-400">Our links</span>
          </h2>

          <p className="text-sm sm:text-base md:text-xl mt-4 leading-relaxed">
            <span className="text-blue-400 font-semibold">Certified</span> builders,
            plumbers, and electricians across{" "}
            <span className="text-blue-400 font-semibold">Zimbabwe</span> —
            compare, connect, and hire with confidence.
          </p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="bg-[#0c3c60] text-white py-14 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Small TOP ICON */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl text-blue-300" />
              <span className="text-lg sm:text-xl">Contact Info</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Contact & Join Together
          </h2>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base mb-10 sm:mb-12">
            Our contacts are always available 24/7 ready to help you with
            your services. Get in touch.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* LOCATION */}
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 shadow-md text-center">
              <FaMapMarkerAlt className="text-blue-500 text-3xl sm:text-4xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-1">Location</p>
              <p className="text-sm">1943 Street Buildlink 5 Harare, 33 Street Mutare</p>
            </div>

            {/* PHONE */}
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 shadow-md text-center">
              <FaPhone className="text-blue-500 text-3xl sm:text-4xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-1">24/7 Service</p>
              <p className="text-sm">Tel: 89 543456896</p>
              <p className="text-sm">Mob: 07123454845</p>
            </div>

            {/* EMAIL */}
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 shadow-md text-center">
              <FaEnvelope className="text-blue-500 text-3xl sm:text-4xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-1">Mail Address</p>
              <p className="text-sm break-all">Buildlinks@gmail.com</p>
            </div>

            {/* HOURS */}
            <div className="bg-white text-black rounded-xl p-6 sm:p-8 shadow-md text-center">
              <FaClock className="text-blue-500 text-3xl sm:text-4xl mx-auto mb-3" />
              <p className="font-bold text-base sm:text-lg mb-1">Opening Time</p>
              <p className="text-sm">Mon - Fri: 8am - 6pm</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & CHAT SECTION */}
      <section className="py-16 sm:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          {/* ABOUT TITLE */}
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-blue-500 font-bold tracking-wider text-xs sm:text-sm">
              ABOUT US
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-2">
              Reach & Get <span className="text-blue-600">Touch With Us !</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 items-center">
            
            {/* Chat Box */}
            <div className="bg-blue-100 rounded-xl p-6 sm:p-8 shadow-md text-center">
              <FaHeadphones className="text-blue-600 text-4xl sm:text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold">Chat with Us!</h3>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">
                Chat with us for any service, job you want and the job is done.
              </p>
              <button className="mt-5 sm:mt-6 bg-blue-600 text-white px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-lg hover:bg-blue-700 transition">
                Let's Chat
              </button>
            </div>

            {/* Center Lady Image */}
            <div className="flex justify-center">
              <img
                src={LadyImage}
                alt="Support Lady"
                className="rounded-xl w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover shadow-md"
              />
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-lg px-4 sm:px-5 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg px-4 sm:px-5 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Your Number"
                  className="w-full border rounded-lg px-4 sm:px-5 py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  className="w-full border rounded-lg px-4 sm:px-5 py-3 h-28 sm:h-32 text-sm sm:text-base focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-lg"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="relative h-[260px] sm:h-[350px] md:h-[420px] px-4">
        <img
          src={MapPlaceholder}
          alt="Map"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-600 rounded-full shadow-lg flex items-center justify-center">
            <FaMapMarkerAlt className="text-white text-lg sm:text-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
