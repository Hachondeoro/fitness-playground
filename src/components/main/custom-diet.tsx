import { useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Alert, Checkbox, Form } from "antd";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { createMealPlan, FoodForm } from "./custom-diet-functions";
import { dietComposition } from "./functions";
import { MealPlan } from "./interfaces";

const CustomDiet: React.FC = () => {
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const carbChoice = useAppSelector((state: RootState) => state.mealplan.carb);
  const proteinChoice = useAppSelector((state: RootState) => state.mealplan.protein);
  const fatChoice = useAppSelector((state: RootState) => state.mealplan.fat);
  const snackChoice = useAppSelector((state: RootState) => state.mealplan.snack);
  const veggiesChoice = useAppSelector((state: RootState) => state.mealplan.veggies);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const [equivalent, setEquivalent] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [showCustomDiet, setshowCustomDiet] = useState(false);
  const [sampleMealPlan, setsampleMealPlan] = useState<MealPlan>();

  const onChange = () => setEquivalent(!equivalent);

  function showMealPlan() {
    if (
      carbChoice.length == 3 &&
      proteinChoice.length == 2 &&
      fatChoice.length == 2 &&
      snackChoice.length == 2 &&
      veggiesChoice.length == 2
    ) {
      const customMealPlan = createMealPlan(carbChoice, proteinChoice, fatChoice, snackChoice, veggiesChoice);
      if (showCustomDiet == true) {
        setsampleMealPlan(customMealPlan);
      } else {
        setshowCustomDiet(!showCustomDiet);
        setsampleMealPlan(customMealPlan);
      }
    } else {
      setshowAlert(!showAlert);
    }
  }

  return (
    <div className="meals">
      <Col className="mx-auto text-left" md="12" lg="8">
        <Form layout="vertical">
          {FoodForm("carbs", 3)}
          {FoodForm("protein", 2)}
          {FoodForm("fats", 2)}
          {FoodForm("veggies", 2)}
          {FoodForm("snack", 2)}
        </Form>
      </Col>
      <Button type="primary" onClick={showMealPlan} className="customDietButton">
        Get custom diet
      </Button>
      {showAlert ? (
        <Alert message="Please fill in all spaces!" type="warning" showIcon closable />
      ) : null}

      {showCustomDiet ? (
        <>
          <h1 className="text-center"> MY CUSTOM DIET </h1>
          <Checkbox onChange={onChange}>Measure in grams</Checkbox>
          <Row className="justify-content-center">
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Training days</h2>
              {dietComposition(sampleMealPlan, goal, "training", calories, equivalent)}
            </Col>
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Resting days </h2>
              {dietComposition(sampleMealPlan, goal, "resting", calories, equivalent)}
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default CustomDiet;
