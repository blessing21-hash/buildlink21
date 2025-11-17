import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search"
import Button from "../../Components/Button/Button"
import Partners from "../../Components/Partners/Partners";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import FeaturedProviders from "../../Components/FeaturedProviders/FeaturedProviders";
import Mission from "../../Components/Mission/Mission";
import Services from "../../Components/Services/Services";

import JobPost from "../../Components/JobPost/JobPost";

import TeamSection from "../../Components/TeamSection/TeamSection";
// import ServicesHero from "../../Components/ServicesHero/ServicesHero";


// import LatestProjects from "../../Components/LatestProjects/LatestProjects";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Search/>
      <Button />
      <Partners/>
      <WhoWeAre/>
      
      <Mission />
      <Services />
      <FeaturedProviders/>
       <JobPost />
       
       {/* <TeamSection /> */}
       {/* <ServicesHero /> */}
      {/* <Footer /> */}
      {/* {<LatestProjects/> } */}
      {/* Next sections will be added here stage by stage */}
    </>
  );
}

export default Home;
