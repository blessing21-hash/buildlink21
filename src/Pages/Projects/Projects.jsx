import React from "react";

import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search"
import Button from "../../Components/Button/Button"

import ProjectLatest from "../../Components/ProjectLatest/ProjectLatest";

function Project() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Search/>
      <Button />
      
      {/* <Footer /> */}
      {<ProjectLatest/> }
      {/* Next sections will be added here stage by stage */}
    </>
  );
}

export default Project;