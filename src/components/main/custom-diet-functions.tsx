import { MealPlan } from "./interfaces";
const getMealObject = (proportions: number[], meals: string[]) => {
  return Object.fromEntries(
    meals.map((key, index) => [key, proportions[index]]),
  );
};

export const createMealPlan = (
  carbsChoices: string[],
  proteinChoices: string[],
  fatChoices: string[],
): MealPlan => {
  const proportions = {
    maintain: {
      breakfast: [0.55, 0.3, 0.15],
      lunch: [0.35, 0.15, 0.5],
      snack: 1,
      dinner: [0.65, 0.25, 0.1],
    },
  };
  const mealsBreakfast = getMealObject(proportions.maintain.breakfast, [
    carbsChoices[0],
    carbsChoices[1],
    fatChoices[0],
  ]);

  const mealsLunch = [proteinChoices[0], fatChoices[1], carbsChoices[2]];
  const mealsDinner = [proteinChoices[1], carbsChoices[2]];

  // breakfast: 1 cereal, 1 fat
  // lunch: 1 heavy protein, 1 veggie, 1 lunch carb
  // snack: 1 snack category (fruits or actual snack)
  // dinner: 1 lunch carb, 1 heavy protein
  const MealPlan = {
    gain: {
      breakfast: {
        proportion: 0.28,
        foods: mealsBreakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: mealsBreakfast,
      },
      snack: {
        proportion: 0.06,
        foods: mealsBreakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: mealsBreakfast,
      },
    },
    cut: {
      breakfast: {
        proportion: 0.28,
        foods: mealsBreakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: mealsBreakfast,
      },
      snack: {
        proportion: 0.06,
        foods: mealsBreakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: mealsBreakfast,
      },
    },
    maintain: {
      breakfast: {
        proportion: 0.28,
        foods: mealsBreakfast,
      },
      lunch: {
        proportion: 0.4,
        foods: mealsBreakfast,
      },
      snack: {
        proportion: 0.06,
        foods: mealsBreakfast,
      },
      dinner: {
        proportion: 0.25,
        foods: mealsBreakfast,
      },
    },
  };
  console.log(MealPlan);
  return MealPlan;
};
