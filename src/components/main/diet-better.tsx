import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { conversion, Data } from "./data-better.js";

const DietBetter: React.FC = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );

  const [equivalent, setEquivalent] = useState(true);
  function onChange() {
    setEquivalent(!equivalent);
  }

  function calorieGoal(calories, goal) {
    switch (goal) {
      case "gain":
        return { training: calories + 700, resting: calories + 100 };
      case "cut":
        return { training: calories - 400, resting: calories - 700 };
      case "maintain":
        return { training: calories + 100, resting: calories };
    }
  }
  function calcGrams(number, key) {
    return `${Math.round(
      (number * 100) / conversion[key].foodCalories,
    )} grams of ${key}`;
  }

  function calcMeasure(number, key) {
    return `${
      Math.round(
        (((number * 100) / conversion[key].foodCalories) * 100) /
          conversion[key].measureGrams,
      ) / 100
    } 
    ${conversion[key].measure}`;
  }

  function calcFoods(data, calories) {
    const calsMeal = calories * data.proportion;
    return (
      <>
        {Object.keys(data.foods).map((key) => (
          <div>
            {equivalent
              ? calcGrams(data.foods[key] * calsMeal, key)
              : calcMeasure(data.foods[key] * calsMeal, key)}
          </div>
        ))}
      </>
    );
  }

  function dietFoods(goal, day) {
    const targetCalories = calorieGoal(calories, goal);
    return (
      <div>
        <h3>Morning</h3>
        {calcFoods(Data[goal].breakfast, targetCalories[day])}
        <h3>Lunch</h3>
        {calcFoods(Data[goal].lunch, targetCalories[day])}
        <h3>Snack</h3>
        {calcFoods(Data[goal].snack, targetCalories[day])}
        <h3>Dinner</h3>
        {calcFoods(Data[goal].dinner, targetCalories[day])}
      </div>
    );
  }

  return (
    <div>
      <br></br>
      <Tabs>
        <TabList className="text-center">
          <Tab>Meal Plan 1</Tab>
          <Tab>Meal Plan 2</Tab>
        </TabList>
        <TabPanel>
          <div className="meals">
            <h1 className="text-center">Sample meal plan 1</h1>
            <Checkbox onChange={onChange}>Standard Measures</Checkbox>
            <Row className="justify-content-center">
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Training days</h2>
                {dietFoods(goal, "training")}
              </Col>
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Resting days </h2>
                {dietFoods(goal, "resting")}
              </Col>
            </Row>
          </div>
          <br></br>
        </TabPanel>
        <TabPanel>
          <h2>Coming soon...</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DietBetter;
