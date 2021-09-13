import BackArrow from "@components/button/backArrow";
import InfoTooltip from "@components/button/infoTooltip";
import { useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox, Form, message } from "antd";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import * as Scroll from "react-scroll";
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
  const [showCustomDiet, setshowCustomDiet] = useState(false);
  const [sampleMealPlan, setsampleMealPlan] = useState<MealPlan>();
  var scroll = Scroll.animateScroll;
  var scroller = Scroll.scroller;
  var Element = Scroll.Element;

  const onChange = () => setEquivalent(!equivalent);

  function showMealPlan() {
    if (
      carbChoice.length == 4 &&
      proteinChoice.length == 2 &&
      fatChoice.length == 2 &&
      snackChoice.length == 2 &&
      veggiesChoice.length == 2
    ) {
      const customMealPlan = createMealPlan(
        carbChoice,
        proteinChoice,
        fatChoice,
        snackChoice,
        veggiesChoice,
      );
      if (showCustomDiet == true) {
        setsampleMealPlan(customMealPlan);
        scroller.scrollTo("myCustomDiet", { duration: 800, delay: 100, smooth: true });
      } else {
        setshowCustomDiet(!showCustomDiet);
        setsampleMealPlan(customMealPlan);
        setTimeout(
          () => scroller.scrollTo("myCustomDiet", { duration: 800, delay: 0, smooth: true }),
          500,
        );
      }
    } else {
      message.warning("Please select your choices");
    }
  }

  return (
    <div className="meals">
      <Col className="mx-auto text-left" md="12" lg="8">
        <Form layout="vertical">
          {FoodForm("carbs", 4)}
          {FoodForm("protein", 2)}
          {FoodForm("fats", 2)}
          {FoodForm("veggies", 2)}
          {FoodForm("snack", 2)}
        </Form>
      </Col>
      <Button type="primary" onClick={showMealPlan} className="customDietButton">
        Get custom diet
      </Button>
      <BackArrow />
      {showCustomDiet ? (
        <Element name="myCustomDiet">
          <h1 className="text-center"> MY CUSTOM DIET </h1>
          <Checkbox onChange={onChange}>Measure in grams</Checkbox>
          <Row className="justify-content-center">
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Training days</h2>
              <p className="sameLine">3 times per week</p>
              <InfoTooltip message="E.g. Monday, Wednesday, Friday<br />1 hour per day" />
              {dietComposition(sampleMealPlan, goal, "training", calories, equivalent)}
            </Col>
            <Col className="mt-2 mx-auto text-left" md="6">
              <h2>Resting days </h2>
              <p className="sameLine">4 times per week</p>
              <InfoTooltip message="E.g. Tuesday, Thursday, Saturday, Sunday" />
              {dietComposition(sampleMealPlan, goal, "resting", calories, equivalent)}
            </Col>
          </Row>
        </Element>
      ) : null}
    </div>
  );
};

export default CustomDiet;
