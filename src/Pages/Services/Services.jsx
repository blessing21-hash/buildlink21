import React from "react";


// import Footer from "../../Components/Footer/Footer";
import OurTeam from "../../Components/OurTeam/OurTeam";
import SearchBar from "../../Components/Search/Search";
import ButtonGrid from "../../Components/Button/Button";
import FeaturedProviders from "../../Components/FeaturedProviders/FeaturedProviders";
import ServicesHero from "../../Components/ServicesHero/ServicesHero";
import Gallery from "../../Components/Gallery/Gallery";
// import ServicesHero from "../../Components/ServicesHero/ServicesHero";




function Services() {
  return (
    <>
     <ServicesHero />
      <SearchBar />
      <ButtonGrid />
      <FeaturedProviders />
      <OurTeam />
       <Gallery />
       {/* <ServicesHero /> */}
      {/* <Footer /> */}

    </>
  );
}

export default Services;
