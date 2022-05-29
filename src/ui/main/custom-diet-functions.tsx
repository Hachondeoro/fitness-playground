import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
// prettier-ignore
import { updateCarb, updateFat, updateProtein, updateSnack, updateVeggies } from "lib/redux/slices/mealplan";
import type { RootState } from "lib/redux/store";
import { Form, Select } from "antd";
import React, { useRef, useState } from "react";
import { fc, foodsByClass, MealPlan } from "lib/interfaces";
import ConversionCSV from "lib/parse-conversion";

export const FoodForm = (foodClass: string, numberChoices: number, message: string): React.ReactElement => {
  const { Option, OptGroup } = Select;
  const dispatch = useAppDispatch();
  const foodChoice = getFoods(foodClass);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const carbChoice = useAppSelector((state: RootState) => state.mealplan.carb);
  const proteinChoice = useAppSelector((state: RootState) => state.mealplan.protein);
  const fatChoice = useAppSelector((state: RootState) => state.mealplan.fat);
  const snackChoice = useAppSelector((state: RootState) => state.mealplan.snack);
  const veggiesChoice = useAppSelector((state: RootState) => state.mealplan.veggies);

  const [macroChoice, setmacroChoice] = useState([]);
  const macroRef = useRef(null); // for closing menu once 3 choices are reached

  const excludeFoods = (food1: string, food2: string, item: string) => {
    return (macroChoice.includes(food1) && item == food2) || (macroChoice.includes(food2) && item == food1);
  };
  const checkIfDisabled = (item: string, limitChoices: number) => {
    // if contains Muesli
    const containsFood =
      excludeFoods("Muesli", "Oats", item) ||
      excludeFoods("Sweet potatoes", "Potatoes", item) ||
      excludeFoods("Rice", "Brown Rice", item);
    // prettier-ignore
    const disabled = macroChoice.length == limitChoices ?
      (macroChoice.includes(item) ? false : true) : false;
    const finalDisabled = containsFood || disabled;
    return finalDisabled;
  };
  const foodChoiceChange = (value: string[], ref: any) => {
    // prettier-ignore
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
        label={`${toTitleCase(foodClass)} : ${message}`}
        className="mt-3 mb-0"
        rules={[
          {
            required: true,
            message: `Please select your favourite ${foodClass}!`,
            type: "array",
          },
        ]}>
        <Select
          mode="multiple"
          showArrow={true}
          placeholder={`Select ${numberChoices} choices`}
          ref={macroRef}
          onChange={(e: string[]) => foodChoiceChange(e, macroRef)}
          showSearch={false}
          className={`${foodClass}`}
          // bordered={false}
          // prettier-ignore
          value={
          foodClass.includes("carbs")? carbChoice
            : foodClass == "protein"? proteinChoice
              : foodClass == "fats"? fatChoice
                : foodClass == "snack"? snackChoice
                  : foodClass == "veggies"? veggiesChoice
                    : null
          }>
          {foodClass.includes("carbs") ? (
            //prettier-ignore
            (goal==="cut")?
              (
                <OptGroup label="Lunch">
                  {getFoods("carbsLunch").keys.map((item) => (
                    <Option disabled={checkIfDisabled(item, 4)} key={item} value={item}> {item} </Option>
                  ))}
                </OptGroup>
              ):(
                <>
                  <OptGroup label="Breakfast">
                    {getFoods("carbsBreakfast").keys.map((item) => (
                      <Option disabled={checkIfDisabled(item, 4)} key={item} value={item}> {item} </Option>
                    ))}
                  </OptGroup>
                  <OptGroup label="Lunch">
                    {getFoods("carbsLunch").keys.map((item) => (
                      <Option disabled={checkIfDisabled(item, 4)} key={item} value={item}> {item} </Option>
                    ))}
                  </OptGroup>
                </>
              )
          ) : (
            //prettier-ignore
            <OptGroup label={toTitleCase(foodClass)}>
              {foodChoice.keys.map((item) => (
                <Option disabled={checkIfDisabled(item, numberChoices)} key={item} value={item}>{item}</Option>
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
