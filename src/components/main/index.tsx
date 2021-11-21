import {useAppDispatch, useAppSelector} from "@redux/hooks";
// prettier-ignore
import {updateAge, updateGoal, updateHeight, updateSex, updateWeight} from "@redux/slices/bodydata";
import {updateMainTab} from "@redux/slices/controls";
import type {RootState} from "@redux/store";
import {Input, Radio} from "antd";
import galleryDot from "public/shapes/gallery-dot-1-1.png";
import serviceLine from "public/shapes/service-line-1-1.png";
import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {resetIdCounter, Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Calories from "./calories";
import DietBetter from "./diet-better";
import Fasting from "./fasting";
import GymRoutine from "./gymroutine";


export const Main: React.FC = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const mainTab = useAppSelector((state: RootState) => state.controls.mainTab);
  const [weight, setWeight] = useState<number|string>(72)
  const [height, setHeight] = useState<number|string>(170)
  const [age, setAge] = useState<number|string>(28)

  useEffect(() => {
    // const timeOutId = setTimeout(() => dispatch(updateWeight(weight)), 3000);
    // return () => clearTimeout(timeOutId);
    if (weight > 30 && weight < 150) {
      dispatch(updateWeight(weight))
    }
  }, [weight]);
  useEffect(() => {
    if (height > 100 && height < 220) {
      dispatch(updateHeight(height))
    }
  }, [height]);
  useEffect(() => {
    if (age > 10 && age < 100) {
      dispatch(updateAge(age))
    }
  }, [age]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    resetIdCounter();
  }, []);
  return (
    <div className="text-center py-4 mx-1">
      <Col md="8" className="mx-auto">
        <h1>FITNESS PLAYGROUND</h1>
        <p className="lead">Dead simple</p>
        <img src={serviceLine} alt="" className="service-one__shape-1"/>
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
                    onChange={(e) => setWeight(e.target.value)}
                    style={{width: 100}}
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
                    onChange={(e) => setAge(e.target.value)}
                    style={{width: 100}}
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
                    onChange={(e) => setHeight(e.target.value)}
                    style={{width: 100}}
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
              <Calories/>
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
            <img src={galleryDot} alt="" className="gallery-home-two__dots"/>
            <DietBetter/>
          </TabPanel>
          <TabPanel>
            <GymRoutine/>
          </TabPanel>
          <TabPanel>
            <Fasting/>
          </TabPanel>
        </Tabs>
      </Col>
    </div>
  );
};
