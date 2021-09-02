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
  const carbs = getFoods("carbs");
  const protein = getFoods("protein");
  const fats = getFoods("fats");
  const [proteinChoices, setProteinChoices] = useState([]);
  const [fatChoices, setFatChoices] = useState([]);

  const [carbsChoices, setCarbsChoices] = useState([]);
  const carbsRef = React.useRef(null);
  const protRef = React.useRef(null);
  const fatRef = React.useRef(null);
  const [selectedItems, setselectedItems] = useState([]);
  const filteredCarbsOptions = carbs.keys.filter(
    (o) => !selectedItems.includes(o),
  );
  const filteredProteinOptions = protein.keys.filter(
    (o) => !selectedItems.includes(o),
  );
  const filteredFatOptions = fats.keys.filter(
    (o) => !selectedItems.includes(o),
  );

  function foodChoiceChange(
    value: string[],
    functionSet: any,
    numberChoices: number,
    ref: any,
  ) {
    functionSet(value);
    setselectedItems(value);
    if (value.length == numberChoices) {
      setTimeout(() => ref.current.blur(), 0);
    }
  }

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
              mode="multiple"
              placeholder="Select 3 choices"
              ref={carbsRef}
              onChange={(e: string[]) =>
                foodChoiceChange(e, setCarbsChoices, 3, carbsRef)
              }
            >
              {filteredCarbsOptions.map((item) => (
                <Option
                  disabled={
                    carbsChoices.length == 3
                      ? carbsChoices.includes(item)
                        ? false
                        : true
                      : false
                  }
                  key={item}
                  value={item}
                >
                  {item}
                </Option>
              ))}
            </Select>
            {carbsChoices}
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
              mode="multiple"
              placeholder="Select 3 choices"
              onChange={(e: string[]) =>
                foodChoiceChange(e, setProteinChoices, 2, protRef)
              }
              ref={protRef}
            >
              {filteredProteinOptions.map((item) => (
                <Option
                  disabled={
                    proteinChoices.length == 2
                      ? proteinChoices.includes(item)
                        ? false
                        : true
                      : false
                  }
                  key={item}
                  value={item}
                >
                  {item}
                </Option>
              ))}
            </Select>
            {proteinChoices}
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
              mode="multiple"
              placeholder="Select 3 choices"
              onChange={(e: string[]) =>
                foodChoiceChange(e, setFatChoices, 2, fatRef)
              }
              ref={fatRef}
            >
              {filteredFatOptions.map((item) => (
                <Option
                  disabled={
                    fatChoices.length == 2
                      ? fatChoices.includes(item)
                        ? false
                        : true
                      : false
                  }
                  key={item}
                  value={item}
                >
                  {item}
                </Option>
              ))}
            </Select>
            {fatChoices}
          </Form.Item>
        </Form>
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
