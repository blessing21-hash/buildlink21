import React from "react";


import Footer from "../../Components/Footer/Footer";
import OurTeam from "../../Components/OurTeam/OurTeam";
import SearchBar from "../../Components/Search/Search";
import ButtonGrid from "../../Components/Button/Button";
import FeaturedProviders from "../../Components/FeaturedProviders/FeaturedProviders";
import ServicesHero from "../../Components/ServicesHero/ServicesHero";

// import ServicesHero from "../../Components/ServicesHero/ServicesHero";




function Services() {
  return (
    <>
     <ServicesHero />
      <SearchBar />
      <ButtonGrid />
      <FeaturedProviders />
      <OurTeam />
       {/* <ServicesHero /> */}
      <Footer />

    </>
  );
}

export default Services;
