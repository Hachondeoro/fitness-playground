import { useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox, Form } from "antd";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { createMealPlan } from "./custom-diet-functions";
import { dietComposition, FoodForm } from "./functions";
import { MealPlan } from "./interfaces";

const CustomDiet: React.FC = () => {
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const carbChoice = useAppSelector((state: RootState) => state.mealplan.carb);
  const proteinChoice = useAppSelector(
    (state: RootState) => state.mealplan.protein,
  );
  const fatChoice = useAppSelector((state: RootState) => state.mealplan.fat);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );
  const [equivalent, setEquivalent] = useState(false);
  const [showCustomDiet, setshowCustomDiet] = useState(false);
  const [sampleMealPlan, setsampleMealPlan] = useState<MealPlan>();

  const onChange = () => setEquivalent(!equivalent);

  function showMealPlan() {
    const customMealPlan = createMealPlan(
      proteinChoice,
      proteinChoice,
      fatChoice,
    );
    setshowCustomDiet(!showCustomDiet);
    setsampleMealPlan(customMealPlan);
  }

  return (
    <div className="meals">
      <Col className="mx-auto text-left" md="12" lg="8">
        <Form layout="vertical">
          {FoodForm("carbs", 3)}
          {carbChoice}
          {FoodForm("protein", 2)}
          {proteinChoice}
          {FoodForm("fats", 2)}
          {fatChoice}
        </Form>
      </Col>
      <Button type="primary" onClick={showMealPlan}>
        Get custom diet
      </Button>
      {showCustomDiet ? (
        <>
          <h1 className="text-center"> MY CUSTOM DIET </h1>
          <Checkbox onChange={onChange}>Measure in grams</Checkbox>
          <Row className="justify-content-center">
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Training days</h2>
              {dietComposition(
                sampleMealPlan,
                goal,
                "training",
                calories,
                equivalent,
              )}
            </Col>
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Resting days </h2>
              {dietComposition(
                sampleMealPlan,
                goal,
                "resting",
                calories,
                equivalent,
              )}
            </Col>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default CustomDiet;
