import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Partners from "../../Components/Partners/Partners";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners/>
      <WhoWeAre/>
      {/* Next sections will be added here stage by stage */}
    </>
  );
}

export default Home;
