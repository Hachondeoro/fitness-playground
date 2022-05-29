import BackArrow from "ui/buttons/backArrow";
import InfoTooltip from "ui/buttons/infoTooltip";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import type { RootState } from "lib/redux/store";
import { Checkbox, Form, message } from "antd";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import * as Scroll from "react-scroll";
import { FoodForm } from "./custom-diet-functions";
import { createMealPlan } from "ui/diets/proportions";
import { dietComposition } from "./functions";
import { MealPlan } from "lib/interfaces";
import { resetFoodChoices } from "lib/redux/slices/mealplan";

const CustomDiet = () => {
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
  const dispatch = useAppDispatch();
  var scroller = Scroll.scroller;
  var Element = Scroll.Element;
  const onChange = () => setEquivalent(!equivalent);
  const nCarbsRequired = goal === "cut" ? 2 : 4;

  function showMealPlan() {
    if (
      carbChoice.length == nCarbsRequired &&
      proteinChoice.length == 2 &&
      fatChoice.length == 2 &&
      snackChoice.length == 2 &&
      veggiesChoice.length == 2
    ) {
      const customMealPlan = createMealPlan(carbChoice, proteinChoice, fatChoice, snackChoice, veggiesChoice);
      if (showCustomDiet == true) {
        setsampleMealPlan(customMealPlan);
        scroller.scrollTo("myCustomDiet", { duration: 800, delay: 100, smooth: true });
      } else {
        setshowCustomDiet(!showCustomDiet);
        setsampleMealPlan(customMealPlan);
        setTimeout(() => scroller.scrollTo("myCustomDiet", { duration: 800, delay: 0, smooth: true }), 500);
      }
    } else {
      const nCarbsToChoose = nCarbsRequired - carbChoice.length;
      if (nCarbsToChoose !== 0) {
        message.warning(`Please select ${nCarbsToChoose} more carb${nCarbsToChoose == 1 ? "!" : "s!"}`);
      }
      const nProteinToChoose = 2 - proteinChoice.length;
      if (nProteinToChoose !== 0) {
        message.warning(`Please select ${nProteinToChoose} more protein${nProteinToChoose == 1 ? "!" : "s!"}`);
      }
      const nFatsToChoose = 2 - fatChoice.length;
      if (nFatsToChoose !== 0) {
        message.warning(`Please select ${nFatsToChoose} more fat${nFatsToChoose == 1 ? "!" : "s!"}`);
      }
      const nVeggiesToChoose = 2 - veggiesChoice.length;
      if (nVeggiesToChoose !== 0) {
        message.warning(`Please select ${nVeggiesToChoose} more veggies${nVeggiesToChoose == 1 ? "!" : "s!"}`);
      }
      const nSnackToChoose = 2 - snackChoice.length;
      if (nSnackToChoose !== 0) {
        message.warning(`Please select ${nSnackToChoose} more snack${nSnackToChoose == 1 ? "!" : "s!"}`);
      }
    }
  }

  return (
    <div className="meals">
      <Col className="mx-auto text-left" md="12" lg="8">
        <Form layout="vertical">
          {goal === "cut"
            ? FoodForm("carbs", 2, "Select 2 for lunch")
            : FoodForm("carbs", 4, "Select 2 for breakfast, 2 for lunch")}
          {FoodForm("protein", 2, "Select 2 choices")}
          {FoodForm("fats", 2, "Select 2 choices")}
          {FoodForm("veggies", 2, "Select 2 choices")}
          {FoodForm("snack", 2, "Select 2 choices")}
        </Form>
      </Col>
      <Button type="primary" onClick={showMealPlan} className="purpleButton">
        Get custom diet
      </Button>
      <Button type="primary" onClick={() => dispatch(resetFoodChoices())} className="purpleButton">
        Reset
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
