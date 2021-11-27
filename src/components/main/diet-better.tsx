import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomDiet from "./custom-diet";
import { SampleMealOne } from "./data-better";
import { dietComposition } from "./functions";
import InfoTooltip from "@components/button/infoTooltip"; 

const DietBetter: React.FC = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const mealplan = useAppSelector((state: RootState) => state.bodydata.mealplan);

  const [equivalent, setEquivalent] = useState(false);
  const [customDiet, setCustomDiet] = useState(false);
  const onChangeEquivalent = () => setEquivalent(!equivalent);
  const onChangeCustomDiet = () => setCustomDiet(!customDiet);

  return (
    <Col md="9" className="mx-auto">
      <div className="meals">
        {mealplan == "custom" ? (
          <CustomDiet />
        ) : (
          <>
            <h1 className="text-center">Sample meal plan</h1>
            <Checkbox onChange={onChangeEquivalent}>Measure in grams</Checkbox>
            <Row className="justify-content-center">
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Training days</h2>
                <p className="sameLine">3 times per week</p>
                <InfoTooltip message="E.g. Monday, Wednesday, Friday<br />1 hour per day" />
                {dietComposition(SampleMealOne, goal, "training", calories, equivalent)}
              </Col>
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Resting days </h2>
                <p className="sameLine">4 times per week</p>
                <InfoTooltip message="E.g. Tuesday, Thursday, Saturday, Sunday" />
                {dietComposition(SampleMealOne, goal, "resting", calories, equivalent)}
              </Col>
            </Row>
          </>
        )}
      </div>
    </Col>
  );
};

export default DietBetter;
