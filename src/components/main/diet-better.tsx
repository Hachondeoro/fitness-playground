import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomDiet from "./custom-diet";
import { SampleMealOne } from "./data-better.js";
import { dietComposition } from "./functions";

const DietBetter: React.FC = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );

  const [equivalent, setEquivalent] = useState(false);
  const [customDiet, setCustomDiet] = useState(true);
  const onChangeEquivalent = () => setEquivalent(!equivalent);
  const onChangeCustomDiet = () => setCustomDiet(!customDiet);

  return (
    <div>
      <div className="meals">
        <Checkbox onChange={onChangeCustomDiet}>
          <strong>Want standard meal plan?</strong>
        </Checkbox>
        {customDiet ? (
          <CustomDiet />
        ) : (
          <>
            <h1 className="text-center">Sample meal plan 1</h1>
            <Checkbox onChange={onChangeEquivalent}>Measure in grams</Checkbox>
            <Row className="justify-content-center">
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Training days</h2>
                {dietComposition(
                  SampleMealOne,
                  goal,
                  "training",
                  calories,
                  equivalent,
                )}
              </Col>
              <Col className="mt-2 mx-auto text-left" md="6">
                <h2>Resting days </h2>
                {dietComposition(
                  SampleMealOne,
                  goal,
                  "resting",
                  calories,
                  equivalent,
                )}
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default DietBetter;
