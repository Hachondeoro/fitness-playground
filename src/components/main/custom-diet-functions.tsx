import { useAppDispatch, useAppSelector as uAS } from "@redux/hooks";
import {
  updateCarb,
  updateFat,
  updateProtein,
  updateSnack
} from "@redux/slices/mealplan";
import type { RootState } from "@redux/store";
import { Form, Select } from "antd";
import React, { useRef, useState } from "react";
import { conversion } from "./data-better";
import { fc, foodsByClass, MealPlan } from "./interfaces";

export const createMealPlan = (
  C: string[],
  P: string[],
  F: string[],
  S: string[],
): MealPlan => {
  // prettier-ignore
  const MealPlan = {
    maintain: {
      breakfast:{proportion:0.32,
        foods:{ [C[0]]:  0.55, [C[1]]:  0.3, [F[1]]:  0.15}},
      lunch:{proportion:0.36,
        foods:{ [P[0]]:  0.55, [C[2]]:  0.35, [F[1]]:  0.1}},
      snack:{proportion:0.07,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.25,
        foods:{ [C[2]]:  0.35, [P[1]]:  0.65, }},
    },
    cut: {
      breakfast:{proportion:0.01,
        foods: { Coffee: 0.3 }},
      lunch:{proportion:0.49,
        foods:{ [P[0]]:  0.55, [C[2]]:  0.35, [F[1]]:  0.1}},
      snack:{proportion:0.1,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.4,
        foods:{ [C[1]]:  0.35, [P[1]]:  0.65, }},
    },
    gain: {
      breakfast:{proportion:0.32,
        foods:{ [C[0]]:  0.55, [C[1]]:  0.3, [F[1]]:  0.15}},
      lunch:{proportion:0.36,
        foods:{ [P[0]]:  0.55, [C[2]]:  0.35, [F[1]]:  0.1}},
      snack:{proportion:0.07,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45, }},
      dinner:{proportion:0.25,
        foods:{ [C[2]]:  0.35, [P[1]]:  0.65, }},
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
    .filter((key) => conversion[key].class == type)
    .reduce((res, key) => ((res[key] = conversion[key]), res), {});
  const keys = Object.keys(foods);

  return { foods, keys };
};

const IncludeFoods = (
  food1: string,
  food2: string,
  value: string[],
  fc: fc,
) => {
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

export const FoodForm = (
  foodClass: string,
  numberChoices: number,
): React.ReactElement => {
  const { Option, OptGroup } = Select;
  const dispatch = useAppDispatch();
  const foodChoice = getFoods(foodClass);
  const carbChoice = uAS((state: RootState) => state.mealplan.carb);
  const proteinChoice = uAS((state: RootState) => state.mealplan.protein);
  const fatChoice = uAS((state: RootState) => state.mealplan.fat);
  const snackChoice = uAS((state: RootState) => state.mealplan.snack);

  const [macroChoice, setmacroChoice] = useState([]);
  const macroRef = useRef(null); // for closing menu once 3 choices are reached
  const [selectedItems, setselectedItems] = useState([]);
  const filteredFoodOptions = foodChoice.keys.filter(
    (o) => !selectedItems.includes(o),
  );

  const excludeFoods = (food1: string, food2: string, item: string) => {
    return (
      (macroChoice.includes(food1) && item == food2) ||
      (macroChoice.includes(food2) && item == food1)
    );
  };
  const checkIfDisabled = (item: string) => {
    // if contains Muesli
    const containsFood =
      excludeFoods("Muesli", "Oats", item) ||
      excludeFoods("Sweet potatoes", "Potatoes", item) ||
      excludeFoods("Rice", "Brown Rice", item);

    const disabled =
      macroChoice.length == numberChoices
        ? macroChoice.includes(item)
          ? false
          : true
        : false;
    const finalDisabled = containsFood || disabled;
    return finalDisabled;
  };
  const foodChoiceChange = (value: string[], ref: any) => {
    if (foodClass == "carbs") {
      dispatch(updateCarb(value));
    } else if (foodClass == "protein") {
      dispatch(updateProtein(value));
    } else if (foodClass == "fats") {
      dispatch(updateFat(value));
    } else if (foodClass == "snack") {
      dispatch(updateSnack(value));
    }
    setselectedItems(value);
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
        label={`Pick some ${foodClass} :)`}
        rules={[
          {
            required: true,
            message: `Please select your favourite ${foodClass}!`,
            type: "array",
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder={`Select ${numberChoices} choices`}
          ref={macroRef}
          onChange={(e: string[]) => foodChoiceChange(e, macroRef)}
          showSearch={false}
          value={
            foodClass == "carbs"
              ? carbChoice
              : foodClass == "protein"
              ? proteinChoice
              : foodClass == "fats"
              ? fatChoice
              : foodClass == "snack"
              ? snackChoice
              : null
          }
        >
          <OptGroup label="Breakfast">
            {filteredFoodOptions.map((item) => (
              <Option disabled={checkIfDisabled(item)} key={item} value={item}>
                {item}
              </Option>
            ))}
          </OptGroup>
        </Select>
      </Form.Item>
    </div>
  );
};
