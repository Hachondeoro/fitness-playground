import { Button, Col, Row, Form } from "react-bootstrap";
import { Input, Radio, Select } from "antd";
import {
  updateAge,
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
  const [weight, setWeight] = useState<number | string>(useAppSelector((state: RootState) => state.bodydata.weight));
  const [height, setHeight] = useState<number | string>(useAppSelector((state: RootState) => state.bodydata.height));
  const [age, setAge] = useState<number | string>(useAppSelector((state: RootState) => state.bodydata.age));
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const mealplan = useAppSelector((state: RootState) => state.bodydata.mealplan);
  useEffect(() => {
    // const timeOutId = setTimeout(() => dispatch(updateWeight(weight)), 3000);
    // return () => clearTimeout(timeOutId);
    if (weight > 30 && weight < 150) {
      dispatch(updateWeight(weight));
    }
  }, [weight]);
  useEffect(() => {
    if (height > 100 && height < 220) {
      dispatch(updateHeight(height));
    }
  }, [height]);
  useEffect(() => {
    if (age > 10 && age < 100) {
      dispatch(updateAge(age));
    }
  }, [age]);
  const dispatch = useAppDispatch();
  return (
    <div className="paddingBottom">
      <img src="/logo.png" alt="logo Fitness Playground" height="250rem" className="my-3" />
      <div style={{ marginTop: "2em" }}>
        <Form>
          <Col className="mx-auto text-left">
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
                  onChange={(e) => setWeight(e.target.value)}
                  style={{ width: 100 }}
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
                  onChange={(e) => setHeight(e.target.value)}
                  style={{ width: 100 }}
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
                  onChange={(e) => setAge(e.target.value)}
                  style={{ width: 100 }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="8">
                I'm :
              </Col>
              <Col xs="4" className="my-1">
                <Radio.Group name={"sex"} onChange={(e) => dispatch(updateSex(e.target.value))} value={sex}>
                  <Radio value={true}>Male</Radio>
                  <Radio value={false}>Female</Radio>
                </Radio.Group>
              </Col>
            </Row>{" "}
            <Row>
              <Col xs="6" md="8">
                <strong>I want to:</strong>
              </Col>
              <Col xs="4" className="my-1">
                <Form.Control
                  as="select"
                  defaultValue={goal}
                  style={{
                    background: "rgba(116, 105, 247, 0.15)",
                    width: 140,
                    borderRadius: "30px",
                  }}
                  onChange={(e) => {
                    console.log(e.target.value)
                    dispatch(updateGoal(e.target.value));
                  }}>
                  <option value={"cut"}>Lose weight</option>
                  <option value={"maintain"}>Maintain</option>
                  <option value={"gain"}>Gain muscle</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="8">
                <strong>I want my meal plan:</strong>
              </Col>
              <Col xs="4" className="my-1">
                <Form.Control
                  as="select"
                  defaultValue={mealplan}
                  style={{
                    background: "rgba(116, 105, 247, 0.15)",
                    width: 140,
                    borderRadius: "30px",
                  }}
                  onChange={(e) => dispatch(updateMealPlan(e.target.value))}>
                  <option value={"standard"}>Standard</option>
                  <option value={"custom"}>Customized</option>
                </Form.Control>
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
        </Form>
      </div>
      {/*<img src={galleryDot} alt="" className="gallery-home-two__dots" />*/}
    </div>
  );
};
export default UserInput;
