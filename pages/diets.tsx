import React, { useState } from "react";
import FastingSummary from "ui/diets/fasting-summary";
import BulkingSummary from "ui/diets/bulking-summary";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import CaloriesInfo from "ui/main/caloriesInfo";
import { Checkbox, Form, message } from "antd";
import { Button, Col, Row } from "react-bootstrap";
import { MealPlanTable } from "ui/main/meal-plan-table";
import { SampleMealOne } from "ui/diets/data-diets";
import MaintainSummary from "ui/diets/maintain-summary";
import { MealPlan } from "lib/interfaces";
import { createMealPlan } from "ui/diets/proportions";
import { FoodChoices } from "ui/main/form-food-choices";
import { resetFoodChoices } from "lib/redux/slices/mealplan";
import BackArrow from "ui/buttons/backArrow";
import InfoTooltip from "ui/buttons/infoTooltip";
import * as Scroll from "react-scroll";

const Diets = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state) => state.bodydata.goal);
  const calories = useAppSelector((state) => state.bodydata.calories);
  const mealplan = useAppSelector((state) => state.bodydata.mealplan);
  const carbChoice = useAppSelector((state) => state.mealplan.carb);
  const proteinChoice = useAppSelector((state) => state.mealplan.protein);
  const fatChoice = useAppSelector((state) => state.mealplan.fat);
  const snackChoice = useAppSelector((state) => state.mealplan.snack);
  const veggiesChoice = useAppSelector((state) => state.mealplan.veggies);
  const [showcustomMealPlan, setshowcustomMealPlan] = useState(false);
  const [customMealPlan, setcustomMealPlan] = useState<MealPlan>();
  var scroller = Scroll.scroller;
  var Element = Scroll.Element;
  const onChange = () => setEquivalent(!equivalent);

  const [equivalent, setEquivalent] = useState(false);
  const onChangeEquivalent = () => setEquivalent(!equivalent);

  const warnMissingChoices = (macronutrient, numberChoicesToSelect, numberChoicesAlreadySelected) => {
    const numberFoodsToPick = numberChoicesToSelect - numberChoicesAlreadySelected.length;
    if (numberFoodsToPick !== 0) {
      message.warning(`Please select ${numberFoodsToPick} more ${macronutrient}${numberFoodsToPick == 1 ? "!" : "s!"}`);
    }
  };

  const validateMealChoices = () => {
    if (
      carbChoice.length == (goal === "cut" ? 2 : 4) &&
      proteinChoice.length == 2 &&
      fatChoice.length == 2 &&
      snackChoice.length == 2 &&
      veggiesChoice.length == 2
    ) {
      const customMealPlan = createMealPlan(carbChoice, proteinChoice, fatChoice, snackChoice, veggiesChoice);
      setcustomMealPlan(customMealPlan);
      setshowcustomMealPlan(true);
      setTimeout(() => scroller.scrollTo("myCustomDiet", { duration: 800, delay: 0, smooth: true }), 200);
    } else {
      // Show warning
      warnMissingChoices("carb", goal === "cut" ? 2 : 4, carbChoice);
      warnMissingChoices("protein", 2, proteinChoice);
      warnMissingChoices("fat", 2, fatChoice);
      warnMissingChoices("veggie", 2, snackChoice);
      warnMissingChoices("snack", 2, veggiesChoice);
    }
  };

  const CrashCourse = () => {
    if (goal == "cut") {
      return <FastingSummary />;
    } else if (goal == "gain") {
      return <BulkingSummary />;
    } else {
      return <MaintainSummary />;
    }
  };
  return (
    <div className="d-flex flex-column">
      <Col md={9} className="mx-auto">
        <h1 className="text-center">Your customized meal plan</h1>
        <CaloriesInfo />
        <div className="meals">
          {/*Show Customized Diet*/}
          {mealplan == "custom" ? (
            <div className="meals">
              <Col className="mx-auto text-start" md="12" lg="8">
                <Form layout="vertical">
                  {goal === "cut"
                    ? FoodChoices("carbs", 2, "Pick 2 carbs for lunch")
                    : FoodChoices("carbs", 4, "Pick 2 carbs for breakfast, 2 for lunch")}
                  {FoodChoices("protein", 2, "Pick 2 protein choices")}
                  {FoodChoices("fats", 2, "Pick 2 fat choices")}
                  {FoodChoices("veggies", 2, "Pick 2 veggies")}
                  {FoodChoices("snack", 2, "Pick 2 snacks")}
                </Form>
              </Col>
              <Button type="button" onClick={validateMealChoices} className="purpleButton">
                Get custom diet
              </Button>
              <Button type="button" onClick={() => dispatch(resetFoodChoices())} className="purpleButton">
                Reset
              </Button>
              <BackArrow />
              {showcustomMealPlan ? (
                <Element name="myCustomDiet">
                  <h1 className="text-center"> MY CUSTOM DIET </h1>
                  <Checkbox onChange={onChange}>Measure in grams</Checkbox>
                  <Row className="justify-content-center">
                    <Col className="mt-2 mx-auto text-start" md="6">
                      <h2>Training days</h2>
                      <p className="sameLine">3 times per week</p>
                      <InfoTooltip message="E.g. Monday, Wednesday, Friday<br />1 hour per day" />
                      {MealPlanTable(customMealPlan, goal, "training", calories, equivalent)}
                    </Col>
                    <Col className="mt-2 mx-auto text-start" md="6">
                      <h2>Resting days </h2>
                      <p className="sameLine">4 times per week</p>
                      <InfoTooltip message="E.g. Tuesday, Thursday, Saturday, Sunday" />
                      {MealPlanTable(customMealPlan, goal, "resting", calories, equivalent)}
                    </Col>
                  </Row>
                </Element>
              ) : null}
            </div>
          ) : (
            // Otherwise Standard diet
            <>
              <Checkbox onChange={onChangeEquivalent}>Measure in grams</Checkbox>
              <Row className="justify-content-center">
                <Col className="mt-2 mx-auto text-start" md="6">
                  <h2>Training days</h2>
                  <p className="sameLine">3 times per week</p>
                  <p className="explanation">E.g. Mon-Wed-Fri</p>
                  {/*<InfoTooltip message="E.g. Monday, Wednesday, Friday<br />1 hour per day" />*/}
                  {MealPlanTable(SampleMealOne, goal, "training", calories, equivalent)}
                </Col>
                <Col className="mt-2 mx-auto text-start" md="6">
                  <h2>Resting days </h2>
                  <p className="sameLine">4 times per week</p>
                  <p className="explanation">E.g.Tue-Thu-Sat-Sun</p>
                  {/*<InfoTooltip message="E.g. Tuesday, Thursday, Saturday, Sunday" />*/}
                  {MealPlanTable(SampleMealOne, goal, "resting", calories, equivalent)}
                </Col>
              </Row>
            </>
          )}
        </div>
      </Col>
      <CrashCourse />
    </div>
  );
};

export default Diets;
