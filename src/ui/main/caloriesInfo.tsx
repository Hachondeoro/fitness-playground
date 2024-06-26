import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { updateBMR, updateCalories } from "lib/redux/slices/bodydata";
import type { RootState } from "lib/redux/store";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const CaloriesInfo = () => {
  const height = useAppSelector((state: RootState) => state.bodydata.height);
  const weight = useAppSelector((state: RootState) => state.bodydata.weight);
  const age = useAppSelector((state: RootState) => state.bodydata.age);
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const bmr = useAppSelector((state: RootState) => state.bodydata.bmr);
  const [stats, setstats] = useState(false);
  const showstats = () => setstats(!stats);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (sex) {
      dispatch(updateBMR(10 * weight + 6.25 * height - 5 * age + 5));
    } else {
      dispatch(updateBMR(10 * weight + 6.25 * height - 5 * age - 161));
    }
    dispatch(updateCalories(bmr * 1.38));
  }, [height, weight, age, sex, goal]);

  var protein = (calories * 0.225) / 4;
  var protein = protein > 140 ? 140 : protein;
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
