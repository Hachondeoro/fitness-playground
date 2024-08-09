import { useAppSelector } from "lib/redux/hooks";
import type { RootState } from "lib/redux/store";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CaloriesInfo = () => {
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const bmr = useAppSelector((state: RootState) => state.bodydata.bmr);
  const [stats, setstats] = useState(true);
  const showstats = () => setstats(!stats);

  let protein = (calories * 0.225) / 4;
  protein = protein > 140 ? 140 : protein;
  const fat = (calories * 0.275) / 9;
  const carbs = (calories * 0.5) / 4;

  return (
    <div className="mt-3" style={{ fontSize: "1.2rem" }}>
      <Button onClick={showstats} className="statsButton">
        My stats
      </Button>
      {stats ? (
        <ul className="pl-2" style={{ listStyle: "none" }}>
          <li>Your daily calorie intake is {Math.floor(calories)} calories</li>
          <li>Your BMR is {Math.floor(bmr)} calories</li>
          <li>Your daily protein intake should be {Math.round(protein)} gr</li>
          <li>Your daily fat intake should be {Math.round(fat)} gr</li>
          <li>Your daily carb intake should be {Math.round(carbs)} gr</li>
        </ul>
      ) : null}
    </div>
  );
};
export default CaloriesInfo;
