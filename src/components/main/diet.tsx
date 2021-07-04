import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { updateCalories, updateBMR } from "@redux/slices/bodydata";
import { Data } from "./data.js";
import { conversion } from "./data.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col, Button } from "antd";
import Tooltip from "@components/tooltip";

const Calories: React.FC = () => {
    const goal = useAppSelector((state: RootState) => state.bodydata.goal);
    const calories = useAppSelector(
        (state: RootState) => state.bodydata.calories,
    );
    const dispatch = useAppDispatch();

    function currentGoal(goal, day, calories) {
        return Data[goal][day].map((item) => (
            <>
                <h3>{item.title}</h3>
                {item.meals.map((item) => (
                    <>
                        {Math.round((calories * item.factor) / 10) * 10} grams
                        of {item.food}
                        <br></br>
                        <p>
                            (~{" "}
                            {Math.round(
                                ((calories * item.factor) /
                                    conversion[item.food].number) *
                                    100,
                            ) / 100}{" "}
                            {conversion[item.food].measure})
                        </p>{" "}
                        <br></br>
                    </>
                ))}
            </>
        ));
    }

    return (
        <div>
            <br></br>
            <Tabs>
                <TabList>
                    <Tab>Meal Plan 1</Tab>
                    <Tab>Meal Plan 2</Tab>
                    <Tab>Meal Plan 3</Tab>
                </TabList>
                <TabPanel>
                    <div className="meals">
                        <Row align="top" justify="center">
                            <h1>Sample meal plan 1</h1>
                            <Tooltip message="hueahuehaue" />
                        </Row>
                        <Row>
                            <Col
                                xs={{ span: 12 }}
                                lg={{ span: 8 }}
                                className="m-auto"
                            >
                                <Row align="top" justify="center">
                                    <h2>Training days</h2>&nbsp;
                                    <Tooltip
                                        message={Data[goal].exercise_tooltip}
                                    />
                                </Row>
                                {currentGoal(
                                    goal,
                                    "exercise",
                                    calories + Data[goal].exercise_surplus,
                                )}
                            </Col>
                            <Col
                                xs={{ span: 12 }}
                                lg={{ span: 8 }}
                                className="m-auto"
                            >
                                <Row align="top" justify="center">
                                    <h2>Resting days </h2>&nbsp;
                                    <Tooltip
                                        message={Data[goal].normal_tooltip}
                                    />
                                </Row>
                                {currentGoal(
                                    goal,
                                    "normal",
                                    calories + Data[goal].normal_surplus,
                                )}
                            </Col>
                        </Row>
                    </div>
                    <br></br>
                </TabPanel>
                <TabPanel>
                    <h2>Coming soon...</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Coming soon...</h2>
                    <br></br>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Calories;
