import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { updateCalories, updateBMR } from "@redux/slices/bodydata";
import { Food } from "./data.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Calories: React.FC = () => {
    const goal = useAppSelector((state: RootState) => state.bodydata.goal);
    const calories = useAppSelector(
        (state: RootState) => state.bodydata.calories,
    );
    const dispatch = useAppDispatch();
    const protein = (calories * 0.25) / 4;
    const fat = (calories * 0.25) / 9;
    const carbs = (calories * 0.5) / 4;
    var gep = 0;

    return (
        <div>
            Your daily protein intake should be: {Math.round(protein)}
            /10 *10 <br></br>
            Your daily fat intake should be: {Math.round(fat)}
            /10 *10<br></br>
            Your daily carb intake should be: {Math.round(carbs)}
            /10 *10 <br></br>
            <br></br>
            <Tabs>
                <TabList>
                    <Tab>Meal Plan 1</Tab>
                    <Tab>Meal Plan 2</Tab>
                    <Tab>Meal Plan 3</Tab>
                </TabList>
                <TabPanel>
                    <h2>Sample meal plan 1</h2>
                    <h3>Breakfast</h3>
                    {Math.round((calories * 0.0361) / 10) * 10} grams of muesli{" "}
                    <br></br>
                    {Math.round((calories * 0.0181) / 10) * 10} grams of peanut
                    butter <br></br>
                    {Math.round((calories * 0.0181) / 10) * 10} grams of honey
                    <br></br>
                    <h3>Lunch</h3>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of tuna{" "}
                    <br></br>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of lettuce{" "}
                    <br></br>
                    {Math.round((calories * 0.0678) / 10) * 10} grams of rice{" "}
                    <br></br>
                    <h3>Mid afternoon snack</h3>
                    {Math.round((calories * 0.0904) / 10) * 10} grams of apples{" "}
                    <br></br>
                    <h3>Dinner</h3>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of
                    potatoes <br></br>
                    {Math.round((calories * 0.0904) / 10) * 10} grams of steak{" "}
                    <br></br>
                </TabPanel>
                <TabPanel>
                    <h2>Sample meal plan 2</h2>
                    <h3>Breakfast</h3>
                    {Math.round((calories * 0.0551) / 10) * 10} grams of muesli{" "}
                    <br></br>
                    {Math.round((calories * 0.1147) / 10) * 10} grams of greek
                    yogurt <br></br>
                    <h3>Lunch</h3>
                    {Math.round((calories * 0.1147) / 10) * 10} grams of chicken
                    breast <br></br>
                    {Math.round((calories * 0.1377) / 10) * 10} grams of sweet
                    potatoes <br></br>
                    <h3>Mid afternoon snack</h3>
                    {Math.round((calories * 0.1147) / 10) * 10} grams of oranges{" "}
                    <br></br>
                    <h3>Dinner</h3>
                    {Math.round((calories * 0.0688) / 10) * 10} grams of rice{" "}
                    <br></br>
                    {Math.round((calories * 0.1147) / 10) * 10} grams of steak{" "}
                    <br></br>
                </TabPanel>
                <TabPanel>
                    <h2>Sample meal plan 3</h2>
                    <h3>Breakfast</h3>
                    {Math.round((calories * 0.0361) / 10) * 10} grams of muesli{" "}
                    <br></br>
                    {Math.round((calories * 0.0181) / 10) * 10} grams of peanut
                    butter <br></br>
                    {Math.round((calories * 0.0181) / 10) * 10} grams of honey{" "}
                    <br></br>
                    <h3>Lunch</h3>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of tuna{" "}
                    <br></br>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of lettuce{" "}
                    <br></br>
                    {Math.round((calories * 0.0678) / 10) * 10} grams of rice{" "}
                    <br></br>
                    <h3>Mid afternoon snack</h3>
                    {Math.round((calories * 0.0904) / 10) * 10} grams of apples{" "}
                    <br></br>
                    <h3>Dinner</h3>
                    {Math.round((calories * 0.1129) / 10) * 10} grams of
                    potatoes <br></br>
                    {Math.round((calories * 0.0904) / 10) * 10} grams of steak{" "}
                    <br></br>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Calories;
