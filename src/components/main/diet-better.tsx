import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { conversion, SampleMealOne, SampleMealTwo} from "./data-better.js";

const DietBetter: React.FC = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );

  const [equivalent, setEquivalent] = useState(false);
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
    const foodGrams = Math.round((number * 100) / conversion[key].foodCalories);
    const proteinGrams = Math.round(
      (foodGrams / 100) * conversion[key].protein,
    );
    const sentenceGrams = `${foodGrams} grams of ${key}`;
    return { foodGrams, proteinGrams, sentenceGrams };
  }

  function calcMeasure(number, key) {
    const valMeasure =
      Math.round(
        (((number * 100) / conversion[key].foodCalories) *
          conversion[key].roundFactor) /
          conversion[key].measureGrams,
      ) / conversion[key].roundFactor;

    const valMeasureBack = Math.round(
      ((valMeasure * conversion[key].measureGrams) / 100) *
        conversion[key].foodCalories,
    );
    const protein = Math.round(
      ((valMeasure * conversion[key].measureGrams) / 100) *
        conversion[key].protein,
    );
    const sentence = `${valMeasure} ${conversion[key].measure} ~ ${valMeasureBack} calories`;

    return { valMeasure, valMeasureBack, protein, sentence };
  }

  function calcMealsStats(data, calories) {
    const calsMeal = calories * data.proportion;
    const calsMain = Object.keys(data.foods).map((key) => (
      <div>
        {equivalent
          ? calcGrams(data.foods[key] * calsMeal, key).sentenceGrams
          : calcMeasure(data.foods[key] * calsMeal, key).sentence}
      </div>
    ));
    const calsMealBack = Object.keys(data.foods)
      .map((key) => calcMeasure(data.foods[key] * calsMeal, key).valMeasureBack)
      .reduce((a, v) => a + v);
    const totalcalsMealBack = equivalent ? null : calsMealBack;

    const proteinMealGrams = Object.keys(data.foods)
      .map((key) => calcGrams(data.foods[key] * calsMeal, key).proteinGrams)
      .reduce((a, v) => a + v);

    const proteinMealBack = Object.keys(data.foods)
      .map((key) => calcMeasure(data.foods[key] * calsMeal, key).protein)
      .reduce((a, v) => a + v);

    const totalproteinMeal = equivalent ? proteinMealGrams : proteinMealBack;

    return { calsMain, totalcalsMealBack, totalproteinMeal };
  }

  function dietComposition(Data, goal, day) {
    const targetCalories = calorieGoal(calories, goal);
    const totalcalsMealBack = Object.keys(Data[goal])
      .map(
        (key) =>
          calcMealsStats(Data[goal][key], targetCalories[day])
            .totalcalsMealBack,
      )
      .reduce((a, v) => a + v);

    const totalProteinGrams = Object.keys(Data[goal])
      .map(
        (key) =>
          calcMealsStats(Data[goal][key], targetCalories[day]).totalproteinMeal,
      )
      .reduce((a, v) => a + v);

    const totalProteinBack = Object.keys(Data[goal])
      .map(
        (key) =>
          calcMealsStats(Data[goal][key], targetCalories[day]).totalproteinMeal,
      )
      .reduce((a, v) => a + v);

    const totalCals = equivalent
      ? Math.round(targetCalories[day])
      : totalcalsMealBack;

    const totalProtein = equivalent ? totalProteinGrams : totalProteinBack;

    return (
      <div>
        Target calories = {Math.round(targetCalories[day])}
        <h3>Morning</h3>
        {calcMealsStats(Data[goal].breakfast, targetCalories[day]).calsMain}
        <h3>Lunch</h3>
        {calcMealsStats(Data[goal].lunch, targetCalories[day]).calsMain}
        <h3>Snack</h3>
        {calcMealsStats(Data[goal].snack, targetCalories[day]).calsMain}
        <h3>Dinner</h3>
        {calcMealsStats(Data[goal].dinner, targetCalories[day]).calsMain}
        Total {totalCals} calories <br></br>
        Total {totalProtein} gr of protein
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
            <Checkbox onChange={onChange}>Measure in grams</Checkbox>
            <Row className="justify-content-center">
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Training days</h2>
                {dietComposition(SampleMealOne, goal, "training")}
              </Col>
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Resting days </h2>
                {dietComposition(SampleMealOne, goal, "resting")}
              </Col>
            </Row>
          </div>
          <br></br>
        </TabPanel>
        <TabPanel>
          <div className="meals">
            <h1 className="text-center">Sample meal plan 2</h1>
            <Checkbox onChange={onChange}>Measure in grams</Checkbox>
            <Row className="justify-content-center">
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Training days</h2>
                {dietComposition(SampleMealTwo, goal, "training")}
              </Col>
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Resting days </h2>
                {dietComposition(SampleMealTwo, goal, "resting")}
              </Col>
            </Row>
          </div>
          <br></br>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DietBetter;
