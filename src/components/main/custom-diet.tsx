import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { Form, Select } from "antd";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { conversion } from "./data-better.js";

const CustomDiet: React.FC = () => {
  const dispatch = useAppDispatch();
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const calories = useAppSelector(
    (state: RootState) => state.bodydata.calories,
  );

  const { Option } = Select;
  const [equivalent, setEquivalent] = useState(false);
  const [carbsChoices, setCarbsChoices] = useState([]);
  const [proteinChoices, setProteinChoices] = useState([]);
  const [fatChoices, setFatChoices] = useState([]);
  function onChange() {
    setEquivalent(!equivalent);
  }

  function getFoods(type: string) {
    const foods = Object.keys(conversion)
      .filter((key) => conversion[key].class == type)
      .reduce((res, key) => ((res[key] = conversion[key]), res), {});
    const keys = Object.keys(foods);

    return { foods, keys };
  }

  const carbs = getFoods("carbs");
  const protein = getFoods("protein");
  const fats = getFoods("fats");

  return (
    <div className="meals">
      <Col className="mx-auto text-left" md="12" lg="8">
        <Form layout="vertical">
          <Form.Item
            name="selected-carbs"
            label="Please select your carbs choices"
            rules={[
              {
                required: true,
                message: "Please select your favourite carbs!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Select 3 choices"
              onChange={(value: any) => {
                if (value.length > 3) {
                  setCarbsChoices(value);
                  value.pop();
                }
              }}
            >
              {carbs.keys.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="selected-protein"
            label="Please select your protein choices"
            rules={[
              {
                required: true,
                message: "Please select your favourite protein!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Select 3 choices"
              onChange={(value: any) => {
                if (value.length > 3) {
                  setProteinChoices(value);
                  value.pop();
                }
              }}
            >
              {protein.keys.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="selected-fats"
            label="Please select your fats choices"
            rules={[
              {
                required: true,
                message: "Please select your favourite fats!",
                type: "array",
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Select 3 choices"
              onChange={(value: any) => {
                if (value.length > 3) {
                  setFatChoices(value);
                  value.pop();
                }
              }}
            >
              {fats.keys.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
        {console.log(proteinChoices)}
      </Col>

      {/* <h1 className="text-center"> MY CUSTOM DIET </h1>
      <Checkbox onChange={onChange}>Measure in grams</Checkbox>
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
      </Row> */}
    </div>
  );
};

export default CustomDiet;
