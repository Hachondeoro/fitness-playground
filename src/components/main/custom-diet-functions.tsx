import { useAppDispatch, useAppSelector } from "@redux/hooks";
// prettier-ignore
import { updateCarb, updateFat, updateProtein, updateSnack, updateVeggies } from "@redux/slices/mealplan";
import type { RootState } from "@redux/store";
import { Form, Select } from "antd";
import React, { useRef, useState } from "react";
// import { conversion } from "./data-better";
import { fc, foodsByClass, MealPlan } from "./interfaces";
import ConversionCSV from "./parse-conversion";

const conversion = ConversionCSV();
export const createMealPlan = (
  C: string[],
  P: string[],
  F: string[],
  S: string[],
  V: string[],
): MealPlan => {
  // prettier-ignore
  const MealPlan = {
    maintain: {
      breakfast:{proportion:0.32,
        foods:{ [C[0]]:  0.55, [C[1]]:  0.3, [S[0]]:  0.15}},
      lunch:{proportion:0.36,
        foods:{ [P[0]]:  0.55, [C[2]]:  0.35, [F[1]]:  0.1}},
      snack:{proportion:0.07,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.25,
        foods:{ [C[3]]:  0.35, [P[1]]:  0.65, }},
    },
    cut: {
      breakfast:{proportion:0.01,
        foods: { Coffee: 0.3 }},
      lunch:{proportion:0.49,
        foods:{ [P[0]]:  0.5, [C[2]]:  0.3, [F[0]]:  0.1, [V[0]]:  0.05, [V[1]]:  0.05}},
      snack:{proportion:0.1,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.4,
        foods:{ [C[3]]:  0.3, [P[1]]:  0.65, [V[0]]:  0.05 }},
    },
    gain: {
      breakfast:{proportion:0.32,
        foods:{ [C[0]]:  0.55, [C[1]]:  0.3, [S[1]]:  0.15}},
      lunch:{proportion:0.36,
        foods:{ [P[0]]:  0.55, [C[2]]:  0.35, [F[0]]:  0.1}},
      snack:{proportion:0.07,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.25,
        foods:{ [C[3]]:  0.35, [P[1]]:  0.65, }},
    },
  };

  // 1. On the Onchange: Via redux, if someone selects Oats, automatically add honey, or if someone selects mixed grain bread, automatically add avocado. This would change in the OnChange function, and then would trigger every time an option is selected. This way, I don't have to change anything on the disabled option and it is super clean.
  // 2. A classification within carbs: Lunch, breakfast

  // breakfast: 1 cereal, 1 fat
  // lunch: 1 heavy protein, 1 veggie, 1 lunch carb
  // snack: 1 snack category (fruits or actual snack)
  // dinner: 1 lunch carb, 1 heavy protein
  return MealPlan;
};

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

export const FoodForm = (foodClass: string, numberChoices: number): React.ReactElement => {
  const { Option, OptGroup } = Select;
  const dispatch = useAppDispatch();
  const foodChoice = getFoods(foodClass);
  const carbChoice = useAppSelector((state: RootState) => state.mealplan.carb);
  const proteinChoice = useAppSelector((state: RootState) => state.mealplan.protein);
  const fatChoice = useAppSelector((state: RootState) => state.mealplan.fat);
  const snackChoice = useAppSelector((state: RootState) => state.mealplan.snack);
  const veggiesChoice = useAppSelector((state: RootState) => state.mealplan.veggies);

  const [macroChoice, setmacroChoice] = useState([]);
  const macroRef = useRef(null); // for closing menu once 3 choices are reached

  const excludeFoods = (food1: string, food2: string, item: string) => {
    return (
      (macroChoice.includes(food1) && item == food2) ||
      (macroChoice.includes(food2) && item == food1)
    );
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
        label={toTitleCase(foodClass)}
        className="my-0"
        rules={[
          {
            required: true,
            message: `Please select your favourite ${foodClass}!`,
            type: "array",
          },
        ]}>
        <Select
          mode="multiple"
          // prettier-ignore
          placeholder={foodClass=="carbs"? "2 Breakfast 2 Lunch" :`Select ${numberChoices} choices`}
          ref={macroRef}
          onChange={(e: string[]) => foodChoiceChange(e, macroRef)}
          showSearch={false}
          className={`${foodClass}`}
          bordered={false}
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
