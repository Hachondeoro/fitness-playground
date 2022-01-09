import { Main } from "@components";
import React from "react";

import DietBetter from "@components/main/diet-better";
import FastingSummary from "@components/main/fasting-summary";
import BulkingSummary from "@components/main/bulking-summary";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";

const Home: React.FC = () => {
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);

  const GoalDescription = () => {
    if (goal == "cut") {
      return <FastingSummary />;
    } else if (goal == "gain") {
      return <BulkingSummary />;
    } else return <div>Maintain</div>;
  };
  return (
    <div className="d-flex flex-column">
      {/* <Header /> */}
      <DietBetter />
      <GoalDescription />
      {/* <Cards /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
