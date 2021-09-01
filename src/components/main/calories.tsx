import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { updateBMR, updateCalories } from "@redux/slices/bodydata";
import type { RootState } from "@redux/store";
import React from "react";

const Calories: React.FC = () => {
  const height = useAppSelector((state: RootState) => state.bodydata.height);
  const weight = useAppSelector((state: RootState) => state.bodydata.weight);
  const age = useAppSelector((state: RootState) => state.bodydata.age);
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );
  const bmr = useAppSelector((state: RootState) => state.bodydata.bmr);
  const dispatch = useAppDispatch();
  sex
    ? dispatch(updateBMR(10 * weight + 6.25 * height - 5 * age + 5))
    : dispatch(updateBMR(10 * weight + 6.25 * height - 5 * age - 161));

  dispatch(updateCalories(bmr * 1.38));
  const protein = (calories * 0.25) / 4;
  const fat = (calories * 0.25) / 9;
  const carbs = (calories * 0.5) / 4;
  
  return (
    <div className="mt-3">
      <ul>
        <li>Your daily calorie intake is {Math.floor(calories)} calories</li>
        <li>Your BMR is {Math.floor(bmr)} calories</li>
        <li>Your daily protein intake should be {Math.round(protein)} gr</li>
        <li>Your daily fat intake should be {Math.round(fat)} gr</li>
        <li>Your daily carb intake should be {Math.round(carbs)} gr</li>
      </ul>
    </div>
  );
};

export default Calories;
