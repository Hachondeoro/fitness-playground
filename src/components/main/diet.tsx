import Tooltip from "@components/tooltip";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Checkbox, Col, Row } from "antd";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { conversion, Data } from "./data.js";

const Diet: React.FC = () => {
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector((state: RootState) => state.bodydata.calories);
  const [equivalent, setEquivalent] = useState(false);
  const dispatch = useAppDispatch();
  function onChange(e) {
    setEquivalent(!equivalent);
  }

  function currentGoal(goal, day, calories) {
    return Data[goal][day].map((item) => (
      <div key={item.title}>
        <h3>{item.title}</h3>
        {item.meals.map((item, i) => (
          <div key={i}>
            {equivalent ? (
              <div>
                {Math.round(((calories * item.factor) / conversion[item.food].number) * 100) / 100}{" "}
                {"  "}
                {conversion[item.food].measure}
              </div>
            ) : (
              <div>
                {Math.round((calories * item.factor) / 10) * 10} grams of {item.food}
              </div>
            )}
          </div>
        ))}
      </div>
    ));
  }

  return (
    <div>
      <br></br>
      <Tabs>
        <TabList>
          <Tab>Meal Plan 1</Tab>
          <Tab>Meal Plan 2</Tab>
        </TabList>
        <TabPanel>
          <div className="meals">
            <Row align="top" justify="center">
              <h1>Sample meal plan 1</h1>
              <Tooltip message="hueahuehaue" />
            </Row>
            <Checkbox onChange={onChange}>Standard Measures</Checkbox>
            <Row>
              <Col xs={{ span: 12 }} lg={{ span: 8 }} className="m-auto">
                <Row align="top" justify="center">
                  <h2>Training days</h2>&nbsp;
                  <Tooltip message={Data[goal].exercise_tooltip} />
                </Row>
                {currentGoal(goal, "exercise", calories + Data[goal].exercise_surplus)}
              </Col>
              <Col xs={{ span: 12 }} lg={{ span: 8 }} className="m-auto">
                <Row align="top" justify="center">
                  <h2>Resting days </h2>&nbsp;
                  <Tooltip message={Data[goal].normal_tooltip} />
                </Row>
                {currentGoal(goal, "normal", calories + Data[goal].normal_surplus)}
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

export default Diet;
