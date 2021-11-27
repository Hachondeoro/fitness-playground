import {Main} from "@components";
import React from "react";

import DietBetter from "@components/main/diet-better";


const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}
      <DietBetter />
      {/* <Cards /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
