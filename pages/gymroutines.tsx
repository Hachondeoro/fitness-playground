import {Main} from "@components";
import React from "react";
import GymRoutine from "@components/main/gymroutine";


const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}
      <GymRoutine/>
      {/* <Cards /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
