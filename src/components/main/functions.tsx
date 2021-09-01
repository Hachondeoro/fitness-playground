import { conversion } from "./data-better.js";
import {GoalCalorie, GramsMeasure, StandardMeasure, MealsStats} from "./interfaces"

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
  const sentence = `${valMeasure} ${conversion[key].measure} ~ ${valMeasureBack} calories`;

  return { valMeasure, valMeasureBack, protein, sentence };
};



export const calcMealsStats = (
  data: any,
  calories: number,
  equivalent: boolean,
): MealsStats => {
  const calsMeal = calories * data.proportion;
  const calsMain = Object.keys(data.foods).map((key) => (
    <div>
      {equivalent
        ? calcGrams(data.foods[key] * calsMeal, key).sentenceGrams
        : calcMeasure(data.foods[key] * calsMeal, key).sentence}
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
