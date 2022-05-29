import React from "react";
import { equivalents } from "ui/diets/proportions";
import { GoalCalorie, GramsMeasure, MealsStats } from "lib/interfaces";
import ConversionCSV from "lib/parse-conversion";
import { Col, Row } from "react-bootstrap";

interface StandardMeasure {
  valMeasure: number;
  valMeasureBack: number;
  protein: number;
  foodportion: string;
  foodportionCalories: string;
}

const conversion = ConversionCSV();
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

export const calcMeasure = (foodCalories: number, key: string): StandardMeasure => {
  const food = conversion[key]; // greek yoghurt, almonds, apples
  var valMeasure;
  var portionMeasure;

  // 332 grams of steak should be 330 grams of steak
  if (["protein", "snackGrams"].includes(food.class)) {
    valMeasure =
      Math.round((foodCalories * 100) / food.foodCalories / food.measureGrams / food.roundFactor) * food.roundFactor;
    portionMeasure = valMeasure.toString();
  } else {
    // I still need this part for 0.8 cups of rice
    valMeasure =
      Math.round((((foodCalories * 100) / food.foodCalories) * food.roundFactor) / food.measureGrams) /
      food.roundFactor;
    // For measures bigger than 2: 3 tsp honey, 4 tsp peanut butter
    if (valMeasure <= 2) {
      var equivalentValues = equivalents.find((item) => item.min <= valMeasure && valMeasure <= item.max);
      portionMeasure = equivalentValues.equivalent; // 3/4 cups of rice
      valMeasure = equivalentValues.value; // convert 0.8 cups of rice to 0.75 cups (so it matches the equivalent)
    } else {
      portionMeasure = valMeasure.toString();
    }
  }
  const valMeasureBack = Math.round(((valMeasure * food.measureGrams) / 100) * food.foodCalories);
  const protein = Math.round(((valMeasure * food.measureGrams) / 100) * food.protein);
  const foodportion = `${portionMeasure} ${food.measure}${Math.ceil(eval(portionMeasure)) == 1 ? "" : "s"}`;
  const foodportionCalories = ` ${valMeasureBack} cals`;
  return { valMeasure, valMeasureBack, protein, foodportion, foodportionCalories };
};
export const calcMealsStats = (data: any, calories: number, equivalent: boolean): MealsStats => {
  const calsMeal = calories * data.proportion;
  const calsMain = Object.keys(data.foods).map((key) =>
    // prettier-ignore
    <div >
      {equivalent ? 
        ( <p className="foodportion">{calcGrams( data.foods[ key ] * calsMeal, key ).sentenceGrams}</p> ) : 
        ( <Row>
          <Col xs="8">
            <p className="foodportion">
              {calcMeasure( data.foods[ key ] * calsMeal, key ).foodportion}
            </p>
          </Col>
          <Col xs="4">
            <p className="foodportionCalories">
              {calcMeasure( data.foods[ key ] * calsMeal, key ).foodportionCalories}
            </p>
          </Col>
        </Row>)}
    </div>,
  );
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
  return {
    calsMain,
    totalcalsMealBack,
    totalproteinMeal,
  };
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
    .map((key) => calcMealsStats(Data[goal][key], targetCalories[day], equivalent).totalcalsMealBack)
    .reduce((a, v) => a + v);
  const totalProteinGrams = Object.keys(Data[goal])
    .map((key) => calcMealsStats(Data[goal][key], targetCalories[day], equivalent).totalproteinMeal)
    .reduce((a, v) => a + v);
  const totalProteinBack = Object.keys(Data[goal])
    .map((key) => calcMealsStats(Data[goal][key], targetCalories[day], equivalent).totalproteinMeal)
    .reduce((a, v) => a + v);
  const totalCals = equivalent ? Math.round(targetCalories[day]) : totalcalsMealBack;
  const totalProtein = equivalent ? totalProteinGrams : totalProteinBack;
  return (
    <>
      {/* prettier-ignore */}
      <div>
        Target calories = {Math.round(targetCalories[day])}
        <h3>Morning</h3>
        {goal == "cut" ?
          ( <p className="foodportion">Morning Fasting</p> ) :
          ( <div className="foodsGroup">{calcMealsStats(Data[goal].breakfast, targetCalories[day], equivalent).calsMain}</div> )}
        <h3>Lunch</h3>
        <div className="foodsGroup">{calcMealsStats(Data[goal].lunch, targetCalories[day], equivalent).calsMain}</div>
        <h3>Snack</h3>
        <div className="foodsGroup">{calcMealsStats(Data[goal].snack, targetCalories[day], equivalent).calsMain}</div>
        <h3>Dinner</h3>
        <div className="foodsGroup">{calcMealsStats(Data[goal].dinner, targetCalories[day], equivalent).calsMain}</div>
        <div style={{ fontWeight: 700, marginTop: "1em" }}>
          Total {totalCals} calories <br />
          Total {totalProtein} gr of protein
        </div>
        <div />
      </div>
    </>
  );
};
