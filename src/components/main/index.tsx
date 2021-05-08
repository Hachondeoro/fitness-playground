import React, { useState, ChangeEvent, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Calories from "./calories";
import { selectWeight, setSame, decrease } from "@redux/slices/calories";
import { useAppSelector, useAppDispatch } from "@redux/hooks";

export const Main: React.FC = () => {
    // const [weight, setWeight] = useState(70);
    const weight = useAppSelector(selectWeight);
    const dispatch = useAppDispatch();
    const [age, setAge] = useState<string>("28");
    const [height, setHeight] = useState<string>("170");

    return (
        <div className="text-center py-4">
            <Container>
                <h1 className="display-2 ">Fitness Playground</h1>
                <p className="lead">The fitness website with superpowers</p>
                <Tabs>
                    <TabList>
                        <Tab>General Data</Tab>
                        <Tab>Calorie Intake</Tab>
                    </TabList>

                    <TabPanel>
                        Your weight is:
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => dispatch(setSame(e.target.value))}
                        />
                        <br></br>
                        Your age is:
                        <input
                            type="number"
                            value={age}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setAge(e.target.value)
                            }
                        />
                        <br></br>
                        Your height is:
                        <input
                            type="number"
                            value={height}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setHeight(e.target.value)
                            }
                        />
                        <Calories />
                    </TabPanel>
                    <TabPanel>
                        <Calories />
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};
