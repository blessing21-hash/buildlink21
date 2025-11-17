
// import React from "react";
// import Home from "./Pages/Home/Home";

// function App() {
//   return <Home />;
// }

// export default App;




import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import GalleryPage from "./Pages/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
