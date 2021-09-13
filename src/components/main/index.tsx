import { useAppDispatch, useAppSelector } from "@redux/hooks";
// prettier-ignore
import { updateAge, updateGoal, updateHeight, updateSex, updateWeight } from "@redux/slices/bodydata";
import { updateMainTab } from "@redux/slices/controls";
import type { RootState } from "@redux/store";
import { Input, Radio } from "antd";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { resetIdCounter, Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Calories from "./calories";
import DietBetter from "./diet-better";
import Fasting from "./fasting";
import GymRoutine from "./gymroutine";

export const Main: React.FC = () => {
  const height = useAppSelector((state: RootState) => state.bodydata.height);
  const weight = useAppSelector((state: RootState) => state.bodydata.weight);
  const age = useAppSelector((state: RootState) => state.bodydata.age);
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const mainTab = useAppSelector((state: RootState) => state.controls.mainTab);
  const dispatch = useAppDispatch();

  useEffect(() => {
    resetIdCounter();
  }, []);
  return (
    <div className="text-center py-4 mx-1">
      <Col md="8" className="mx-auto">
        <h1>FITNESS PLAYGROUND</h1>
        <p className="lead">Dead simple</p>
        <Tabs selectedIndex={mainTab} onSelect={(index) => dispatch(updateMainTab(index))}>
          <TabList className="reactTabs">
            <Tab>General {"\n"}Data</Tab>
            <Tab>Gym {"\n"}routines</Tab>
            <Tab>Fasting {"\n"}notes</Tab>
          </TabList>

          <TabPanel>
            <Col className="mx-auto text-left" md="12" lg="8">
              <Row>
                <Col xs="5">My weight is:</Col>
                <Col xs="4">
                  <Input
                    suffix="KG"
                    type="number"
                    value={weight}
                    onChange={(e) => dispatch(updateWeight(e.target.value))}
                    style={{ width: 100 }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="5">My age is:</Col>
                <Col xs="4">
                  <Input
                    suffix="years"
                    type="number"
                    value={age}
                    onChange={(e) => dispatch(updateAge(e.target.value))}
                    style={{ width: 100 }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="5">My height is:</Col>
                <Col xs="4">
                  <Input
                    suffix="CM"
                    type="number"
                    value={height}
                    onChange={(e) => dispatch(updateHeight(e.target.value))}
                    style={{ width: 100 }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="5">I'm :</Col>
                <Col xs="4">
                  <Radio.Group
                    name={"sex"}
                    onChange={(e) => dispatch(updateSex(e.target.value))}
                    value={sex}>
                    <Radio value={true}>Male</Radio>
                    <Radio value={false}>Female</Radio>
                  </Radio.Group>
                </Col>
              </Row>
              <Calories />
              <br></br>
              <h3>I want to:</h3>
              <Radio.Group
                name={"goal"}
                onChange={(e) => dispatch(updateGoal(e.target.value))}
                value={goal}>
                <Radio value={"cut"}>Cut fat</Radio>
                <Radio value={"maintain"}>Maintain</Radio>
                <Radio value={"gain"}>Gain muscle</Radio>
              </Radio.Group>
              <br></br>
            </Col>
            <DietBetter />
          </TabPanel>
          <TabPanel>
            <GymRoutine />
          </TabPanel>
          <TabPanel>
            <Fasting />
          </TabPanel>
        </Tabs>
      </Col>
    </div>
  );
};
