import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
// prettier-ignore
import { updateCarb, updateFat, updateProtein, updateSnack, updateVeggies } from "lib/redux/slices/mealplan";
import { Form, Select } from "antd";
import React, { useRef, useState } from "react";
import { fc, foodsByClass } from "lib/interfaces";
import ConversionCSV from "lib/parse-conversion";

export const FoodChoices = (foodClass: string, numberChoices: number, message: string): React.ReactElement => {
  const { Option, OptGroup } = Select;
  const dispatch = useAppDispatch();
  const foodChoice = getFoods(foodClass);
  const goal = useAppSelector((state) => state.bodydata.goal);
  const carbChoice = useAppSelector((state) => state.mealplan.carb);
  const proteinChoice = useAppSelector((state) => state.mealplan.protein);
  const fatChoice = useAppSelector((state) => state.mealplan.fat);
  const snackChoice = useAppSelector((state) => state.mealplan.snack);
  const veggiesChoice = useAppSelector((state) => state.mealplan.veggies);

  const [macroChoice, setmacroChoice] = useState([]);
  const macroRef = useRef(null); // for closing menu once 3 choices are reached

  const excludeFoods = (food1: string, food2: string, item: string) => {
    return (macroChoice.includes(food1) && item == food2) || (macroChoice.includes(food2) && item == food1);
  };
  const checkIfDisabled = (foodname: string, limitChoices: number) => {
    // E.g. If contains Muesli, then disable the option to pick Oats
    const containsFood =
      excludeFoods("Muesli", "Oats", foodname) ||
      excludeFoods("Sweet potatoes", "Potatoes", foodname) ||
      excludeFoods("Rice", "Brown Rice", foodname);

    const disabled = macroChoice.length == limitChoices ? !macroChoice.includes(foodname) : false;
    return containsFood || disabled;
  };
  // prettier-ignore
  const foodChoiceChange = (value: string[], ref: any) => {
    (foodClass == "carbs")? dispatch(updateCarb(value)):
    (foodClass == "protein")? dispatch(updateProtein(value)):
    (foodClass == "fats")? dispatch(updateFat(value)):
    (foodClass == "snack")? dispatch(updateSnack(value)):
    (foodClass == "veggies")? dispatch(updateVeggies(value)):console.log();

    setmacroChoice(value);
    if (value.length == numberChoices) {
      setTimeout(() => ref.current.blur(), 0);
    }
    const fc = { carbChoice, proteinChoice, fatChoice, dispatch };
    IncludeAllFoods(value, fc);
  };

  return (
    <div>
      <Form.Item
        label={`${message}`}
        className="mt-3 mb-0"
        rules={[{ required: true, message: `Please select your favourite ${foodClass}!`, type: "array" }]}>
        <Select
          mode="multiple"
          placeholder={`Select ${numberChoices} choices`}
          ref={macroRef}
          onChange={(e: string[]) => foodChoiceChange(e, macroRef)}
          showSearch={false}
          className={`${foodClass}`}
          // bordered={false}
          // prettier-ignore
          value={
          foodClass.includes("carbs")? carbChoice : 
          foodClass == "protein"? proteinChoice : 
          foodClass == "fats"? fatChoice : 
          foodClass == "snack"? snackChoice : 
          foodClass == "veggies"? veggiesChoice : 
          null
          }>
          {foodClass.includes("carbs") ? (
            <>
              {goal !== "cut" ? (
                <OptGroup label="Breakfast">
                  {getFoods("carbsBreakfast").keys.map((foodname) => (
                    <Option disabled={checkIfDisabled(foodname, 4)} key={foodname} value={foodname}>
                      {foodname}
                    </Option>
                  ))}
                </OptGroup>
              ) : null}

              <OptGroup label="Lunch">
                {getFoods("carbsLunch").keys.map((foodname) => (
                  <Option disabled={checkIfDisabled(foodname, 4)} key={foodname} value={foodname}>
                    {foodname}
                  </Option>
                ))}
              </OptGroup>
            </>
          ) : (
            <OptGroup label={toTitleCase(foodClass)}>
              {foodChoice.keys.map((foodname) => (
                <Option disabled={checkIfDisabled(foodname, numberChoices)} key={foodname} value={foodname}>
                  {foodname}
                </Option>
              ))}
            </OptGroup>
          )}
        </Select>
      </Form.Item>
    </div>
  );
};

const conversion = ConversionCSV();

const getFoods = (type: string): { foods: foodsByClass; keys: string[] } => {
  const foods = Object.keys(conversion)
    .filter((key) => conversion[key].class.includes(type))
    .reduce((res, key) => ((res[key] = conversion[key]), res), {});
  const keys = Object.keys(foods);

  return { foods, keys };
};

const IncludeFoods = (food1: string, food2: string, value: string[], fc: fc) => {
  const classfood2 = conversion[food2].class;
  if (value.includes(food1)) {
    if (classfood2 == "carbs" && !fc.carbChoice.includes(food2)) {
      fc.dispatch(updateCarb([...fc.carbChoice, food2]));
    } else if (classfood2 == "protein" && !fc.proteinChoice.includes(food2)) {
      fc.dispatch(updateProtein([...fc.proteinChoice, food2]));
    } else if (classfood2 == "fats" && !fc.fatChoice.includes(food2)) {
      fc.dispatch(updateFat([...fc.fatChoice, food2]));
    }
  }
};

const IncludeAllFoods = (value: string[], fc: fc) => {
  IncludeFoods("Mixed grain Bread", "Avocado", value, fc);
};

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
