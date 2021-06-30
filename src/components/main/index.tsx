import React, { useState, ChangeEvent, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
    updateWeight,
    updateHeight,
    updateAge,
    updateSex,
    updateGoal,
} from "@redux/slices/bodydata";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Form, Radio, Input } from "antd";

import Calories from "./calories";
import Diet from "./diet";

export const Main: React.FC = () => {
    const height = useAppSelector((state: RootState) => state.bodydata.height);
    const weight = useAppSelector((state: RootState) => state.bodydata.weight);
    const age = useAppSelector((state: RootState) => state.bodydata.age);
    const sex = useAppSelector((state: RootState) => state.bodydata.sex);
    const goal = useAppSelector((state: RootState) => state.bodydata.goal);
    // const weight = useAppSelector(selectWeight);f

    const dispatch = useAppDispatch();
    // const [age, setAge] = useState<string>("28");
    // const [height, setHeight] = useState<string>("170");

    return (
        <div className="text-center py-4">
            <Container>
                <h1>Fitness Playground</h1>
                <p className="lead">The fitness website with superpowers</p>
                <Tabs>
                    <TabList>
                        <Tab>General Data</Tab>
                        <Tab>Calorie Intake</Tab>
                        <Tab>Meal Plans</Tab>
                    </TabList>

                    <TabPanel>
                        Your weight is:
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) =>
                                dispatch(updateWeight(e.target.value))
                            }
                        />
                        <br></br>
                        Your age is:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) =>
                                dispatch(updateAge(e.target.value))
                            }
                        />
                        <br></br>
                        Your height is:
                        <input
                            type="number"
                            value={height}
                            onChange={(e) =>
                                dispatch(updateHeight(e.target.value))
                            }
                        />
                        <br></br>
                        Sex:
                        <Radio.Group
                            name={"sex"}
                            onChange={(e) =>
                                dispatch(updateSex(e.target.value))
                            }
                            value={sex}
                        >
                            <Radio value={true}>Male</Radio>
                            <Radio value={false}>Female</Radio>
                        </Radio.Group>
                        <br></br>
                        Goal:
                        <Radio.Group
                            name={"goal"}
                            onChange={(e) =>
                                dispatch(updateGoal(e.target.value))
                            }
                            value={goal}
                        >
                            <Radio value={"cut"}>Cut fat</Radio>
                            <Radio value={"maintain"}>Maintain</Radio>
                            <Radio value={"gain"}>Gain muscle</Radio>
                        </Radio.Group>
                        {/* <input
                            type="number"
                            value={Number(height)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setHeight(e.target.value)
                            }
                        /> */}
                        <Calories />
                        <br></br>
                        <Diet />
                    </TabPanel>
                    <TabPanel>
                        <Calories />
                    </TabPanel>
                    <TabPanel>
                        <Diet />
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};
