import { Main } from "@components";
import React from "react";
import Fasting from "@components/main/fasting";

const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}
      <Fasting/>
      {/* <Cards /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
