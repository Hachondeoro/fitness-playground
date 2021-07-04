import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { updateCalories, updateBMR } from "@redux/slices/bodydata";

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

    // if (goal == "cut") {
    //     // 24, 32, 28
    //     dispatch(updateCalories(bmr * 1.03));
    // } else if (goal == "maintain") {
    //     dispatch(updateCalories(bmr * 1.38));
    // } else if (goal == "gain") {
    //     dispatch(updateCalories(bmr * 1.64));
    // }

    return (
        <div>
            Your daily calorie intake is {Math.floor(calories)}
            <br></br>
            Your BMR is {Math.floor(bmr)}
            <br></br>
            Your daily protein intake should be {Math.round(protein)} gr
            <br></br>
            Your daily fat intake should be {Math.round(fat)} gr
            <br></br>
            Your daily carb intake should be {Math.round(carbs)} gr
            <br></br>
        </div>
    );
};

export default Calories;
