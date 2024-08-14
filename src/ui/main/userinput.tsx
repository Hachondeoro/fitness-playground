import { Button, Col, Row } from "react-bootstrap";
import { Input, Radio, Select } from "antd";
import {
  updateAge,
  updateBMR,
  updateCalories,
  updateGoal,
  updateHeight,
  updateMealPlan,
  updateSex,
  updateWeight,
} from "lib/redux/slices/bodydata";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { RootState } from "lib/redux/store";
import Link from "next/link";

const { Option } = Select;
// import logo from "/logo.png";
const UserInput = () => {
  const [weight, setWeight] = useState<number>(useAppSelector((state: RootState) => state.bodydata.weight));
  const [height, setHeight] = useState<number>(useAppSelector((state: RootState) => state.bodydata.height));
  const [age, setAge] = useState<number>(useAppSelector((state: RootState) => state.bodydata.age));
  const [sex, setSex] = useState<string>(useAppSelector((state: RootState) => state.bodydata.sex));
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const mealplan = useAppSelector((state: RootState) => state.bodydata.mealplan);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = sex === "male" ? bmr + 5 : bmr - 161;
    dispatch(updateBMR(bmr));
    dispatch(updateCalories(bmr * 1.38));
  }, [height, weight, age, sex, goal]);

  return (
    <div className="paddingBottom">
      <img src="/logo.png" alt="logo Fitness Playground" height="250rem" className="my-3" />
      <div style={{ marginTop: "2em" }}>
        <Col className="mx-auto text-start">
          <Row>
            <Col xs="6" md="8">
              My weight is:
            </Col>
            <Col xs="4" className="my-1">
              <Input
                suffix="KG"
                type="number"
                value={weight}
                className="inputCustom"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 150) {
                    setWeight(value);
                    dispatch(updateWeight(value));
                  }
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="8">
              My height is:
            </Col>
            <Col xs="4" className="my-1">
              <Input
                suffix="CM"
                type="number"
                value={height}
                className="inputCustom"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 220) {
                    setHeight(value);
                    dispatch(updateHeight(value));
                  }
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="8">
              My age is:
            </Col>
            <Col xs="4" className="my-1">
              <Input
                suffix="years"
                type="number"
                value={age}
                className="inputCustom"
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 100) {
                    setAge(value);
                    dispatch(updateAge(value));
                  }
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="8">
              I'm :
            </Col>
            <Col xs="4" className="my-1">
              <Radio.Group
                name={"sex"}
                onChange={(e) => {
                  setSex(e.target.value);
                  dispatch(updateSex(e.target.value));
                }}
                value={sex}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="8">
              <strong>I want to:</strong>
            </Col>
            <Col xs="4" className="my-1">
              <Select defaultValue={goal} className="selectCustom" onChange={(e) => dispatch(updateGoal(e))}>
                <Option value={"cut"}>Lose weight</Option>
                <Option value={"maintain"}>Maintain</Option>
                <Option value={"gain"}>Gain muscle</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="8">
              <strong>I want my meal plan:</strong>
            </Col>
            <Col xs="4" className="my-1">
              <Select defaultValue={mealplan} className="selectCustom" onChange={(e) => dispatch(updateMealPlan(e))}>
                <Option value={"standard"}>Standard</Option>
                <Option value={"custom"}>Customized</Option>
              </Select>
            </Col>
          </Row>{" "}
          <Row>
            <Col xs="6" md="8"></Col>
            <Col xs="3" className="my-1">
              <Link href="/diets" passHref>
                <Button className="purpleButton float-right">GO!</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};
export default UserInput;
