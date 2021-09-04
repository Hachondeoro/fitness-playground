import { useAppDispatch } from "@redux/hooks";
import {
  updateCarb,
  updateFat,
  updateProtein,
  updateSnack
} from "@redux/slices/mealplan";
import { Form, Select } from "antd";
import React, { useRef, useState } from "react";
import { conversion } from "./data-better.js";
import {
  foodsByClass,
  GoalCalorie,
  GramsMeasure,
  MealsStats,
  StandardMeasure
} from "./interfaces";

const getFoods = (type: string): { foods: foodsByClass; keys: string[] } => {
  const foods = Object.keys(conversion)
    .filter((key) => conversion[key].class == type)
    .reduce((res, key) => ((res[key] = conversion[key]), res), {});
  const keys = Object.keys(foods);

  return { foods, keys };
};

export const FoodForm = (
  foodClass: string,
  numberChoices: number,
): React.ReactElement => {
  const { Option, OptGroup } = Select;
  const dispatch = useAppDispatch();
  const foodChoice = getFoods(foodClass);

  const [macroChoice, setmacroChoice] = useState([]);
  const macroRef = useRef(null); // for closing menu once 3 choices are reached
  const [selectedItems, setselectedItems] = useState([]);
  const filteredFoodOptions = foodChoice.keys.filter(
    // Hiding selected options
    (o) => !selectedItems.includes(o),
  );

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
        >
          <OptGroup label="Breakfast">
            {filteredFoodOptions.map((item) => (
              <Option
                disabled={
                  macroChoice.length == numberChoices
                    ? macroChoice.includes(item)
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
          </OptGroup>
        </Select>
      </Form.Item>
    </div>
  );
};

export const calorieGoal = (calories: number, goal: string): GoalCalorie => {
  switch (goal) {
    case "gain":
      return { training: calories + 700, resting: calories + 100 };
    case "cut":
      return { training: calories - 400, resting: calories - 700 };
    case "maintain":
      return { training: calories + 100, resting: calories };
  }
};

export const calcGrams = (number: number, key: string): GramsMeasure => {
  const foodGrams = Math.round((number * 100) / conversion[key].foodCalories);
  const proteinGrams = Math.round((foodGrams / 100) * conversion[key].protein);
  const sentenceGrams = `${foodGrams} grams of ${key}`;
  return { foodGrams, proteinGrams, sentenceGrams };
};

export const calcMeasure = (number: number, key: string): StandardMeasure => {
  const valMeasure =
    Math.round(
      (((number * 100) / conversion[key].foodCalories) *
        conversion[key].roundFactor) /
        conversion[key].measureGrams,
    ) / conversion[key].roundFactor;

  const valMeasureBack = Math.round(
    ((valMeasure * conversion[key].measureGrams) / 100) *
      conversion[key].foodCalories,
  );
  const protein = Math.round(
    ((valMeasure * conversion[key].measureGrams) / 100) *
      conversion[key].protein,
  );
  const foodportion = `${valMeasure} ${conversion[key].measure}`;
  const foodportionCalories = ` (${valMeasureBack} cals)`;

  return {
    valMeasure,
    valMeasureBack,
    protein,
    foodportion,
    foodportionCalories,
  };
};

export const calcMealsStats = (
  data: any,
  calories: number,
  equivalent: boolean,
): MealsStats => {
  const calsMeal = calories * data.proportion;
  const calsMain = Object.keys(data.foods).map((key) => (
    <div>
      {equivalent ? (
        <p className="foodportion">
          {calcGrams(data.foods[key] * calsMeal, key).sentenceGrams}
        </p>
      ) : (
        <>
          <p className="foodportion">
            {calcMeasure(data.foods[key] * calsMeal, key).foodportion}
          </p>
          &nbsp;
          <p className="foodportionCalories">
            {calcMeasure(data.foods[key] * calsMeal, key).foodportionCalories}
          </p>
        </>
      )}
    </div>
  ));
  const calsMealBack = Object.keys(data.foods)
    .map((key) => calcMeasure(data.foods[key] * calsMeal, key).valMeasureBack)
    .reduce((a, v) => a + v);
  const totalcalsMealBack = equivalent ? null : calsMealBack;

  const proteinMealGrams = Object.keys(data.foods)
    .map((key) => calcGrams(data.foods[key] * calsMeal, key).proteinGrams)
    .reduce((a, v) => a + v);

  const proteinMealBack = Object.keys(data.foods)
    .map((key) => calcMeasure(data.foods[key] * calsMeal, key).protein)
    .reduce((a, v) => a + v);

  const totalproteinMeal = equivalent ? proteinMealGrams : proteinMealBack;

  return { calsMain, totalcalsMealBack, totalproteinMeal };
};

export const dietComposition = (
  Data: any,
  goal: string,
  day: string,
  calories: number,
  equivalent: boolean,
): React.ReactElement => {
  const targetCalories = calorieGoal(calories, goal);
  const totalcalsMealBack = Object.keys(Data[goal])
    .map(
      (key) =>
        calcMealsStats(Data[goal][key], targetCalories[day], equivalent)
          .totalcalsMealBack,
    )
    .reduce((a, v) => a + v);

  const totalProteinGrams = Object.keys(Data[goal])
    .map(
      (key) =>
        calcMealsStats(Data[goal][key], targetCalories[day], equivalent)
          .totalproteinMeal,
    )
    .reduce((a, v) => a + v);

  const totalProteinBack = Object.keys(Data[goal])
    .map(
      (key) =>
        calcMealsStats(Data[goal][key], targetCalories[day], equivalent)
          .totalproteinMeal,
    )
    .reduce((a, v) => a + v);

  const totalCals = equivalent
    ? Math.round(targetCalories[day])
    : totalcalsMealBack;

  const totalProtein = equivalent ? totalProteinGrams : totalProteinBack;

  return (
    <div>
      Target calories = {Math.round(targetCalories[day])}
      <h3>Morning</h3>
      {
        calcMealsStats(Data[goal].breakfast, targetCalories[day], equivalent)
          .calsMain
      }
      <h3>Lunch</h3>
      {
        calcMealsStats(Data[goal].lunch, targetCalories[day], equivalent)
          .calsMain
      }
      <h3>Snack</h3>
      {
        calcMealsStats(Data[goal].snack, targetCalories[day], equivalent)
          .calsMain
      }
      <h3>Dinner</h3>
      {
        calcMealsStats(Data[goal].dinner, targetCalories[day], equivalent)
          .calsMain
      }
      Total {totalCals} calories <br></br>
      Total {totalProtein} gr of protein
    </div>
  );
};
