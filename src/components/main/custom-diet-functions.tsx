import { MealPlan } from "./interfaces";

export const createMealPlan = (
  carbsChoices: string[],
  proteinChoices: string[],
  fatChoices: string[],
): MealPlan => {
  const proportions = [0.55, 0.3, 0.15];
  const mealsBreakfast = carbsChoices.slice(0, 2).concat(fatChoices);
  var breakfast = Object.fromEntries(
    mealsBreakfast.map((key, index) => [key, proportions[index]]),
  );
  // breakfast: 1 cereal, 1 fat
  // lunch: 1 heavy protein, 1 veggie, 1 lunch carb
  // snack: 1 snack category (fruits or actual snack)
  // dinner: 1 lunch carb, 1 heavy protein
  const MealPlan = {
    gain: {
      breakfast: {
        proportion: 0.28,
        foods: breakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: breakfast,
      },
      snack: {
        proportion: 0.06,
        foods: breakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: breakfast,
      },
    },
    cut: {
      breakfast: {
        proportion: 0.28,
        foods: breakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: breakfast,
      },
      snack: {
        proportion: 0.06,
        foods: breakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: breakfast,
      },
    },
    maintain: {
      breakfast: {
        proportion: 0.28,
        foods: breakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: breakfast,
      },
      snack: {
        proportion: 0.06,
        foods: breakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: breakfast,
      },
    },
  };
  console.log(MealPlan);
  return MealPlan;
};
