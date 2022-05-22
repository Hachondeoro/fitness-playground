import React, { useState } from "react";
import FastingSummary from "ui/diets/fasting-summary";
import BulkingSummary from "ui/diets/bulking-summary";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { RootState } from "lib/redux/store";
import CaloriesInfo from "ui/main/caloriesInfo";
import CustomDiet from "ui/main/custom-diet";
import { Checkbox } from "antd";
import { Col, Row } from "react-bootstrap";
import { dietComposition } from "ui/main/functions";
import { SampleMealOne } from "ui/diets/data-diets";
import MaintainSummary from "ui/diets/maintain-summary";

const Diets = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const mealplan = useAppSelector((state: RootState) => state.bodydata.mealplan);

  const [equivalent, setEquivalent] = useState(false);
  const onChangeEquivalent = () => setEquivalent(!equivalent);

  const GoalDescription = () => {
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
      <Col md="9" className="mx-auto">
        <h1 className="text-center">Sample Meal Plan</h1>
        <CaloriesInfo />
        <div className="meals">
          {mealplan == "custom" ? (
            <CustomDiet />
          ) : (
            <>
              <Checkbox onChange={onChangeEquivalent}>Measure in grams</Checkbox>
              <Row className="justify-content-center">
                <Col className="mt-2 mx-auto text-left" md="6">
                  <h2>Training days</h2>
                  <p className="sameLine">3 times per week</p>
                  <p className="explanation">E.g. Mon-Wed-Fri</p>
                  {/*<InfoTooltip message="E.g. Monday, Wednesday, Friday<br />1 hour per day" />*/}
                  {dietComposition(SampleMealOne, goal, "training", calories, equivalent)}
                </Col>
                <Col className="mt-2 mx-auto text-left" md="6">
                  <h2>Resting days </h2>
                  <p className="sameLine">4 times per week</p>
                  <p className="explanation">E.g.Tue-Thu-Sat-Sun</p>
                  {/*<InfoTooltip message="E.g. Tuesday, Thursday, Saturday, Sunday" />*/}
                  {dietComposition(SampleMealOne, goal, "resting", calories, equivalent)}
                </Col>
              </Row>
            </>
          )}
        </div>
      </Col>
      <GoalDescription />
    </div>
  );
};

export default Diets;
