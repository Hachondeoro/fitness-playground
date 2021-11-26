import {Main} from "@components";
import React from "react";
import AboutUs from "@components/main/about";


const About: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}
      <AboutUs/>
      {/* <Cards /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;
