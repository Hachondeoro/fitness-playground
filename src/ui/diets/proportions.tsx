// prettier-ignore
import { MealPlan } from "lib/interfaces";

export const equivalents = [
  { min: 0, max: 0.25, equivalent: "1/4", value: 0.25 },
  { min: 0.25, max: 0.4, equivalent: "1/3", value: 0.33 },
  { min: 0.4, max: 0.55, equivalent: "1/2", value: 0.5 },
  { min: 0.55, max: 0.7, equivalent: "2/3", value: 0.66 },
  { min: 0.7, max: 0.85, equivalent: "3/4", value: 0.75 },
  { min: 0.85, max: 1.05, equivalent: "1", value: 1 },
  { min: 1.05, max: 1.2, equivalent: "1 & 1/4", value: 1.25 },
  { min: 1.2, max: 1.4, equivalent: "1 & 1/3", value: 1.3 },
  { min: 1.4, max: 1.55, equivalent: "1 & 1/2", value: 1.5 },
  { min: 1.55, max: 1.7, equivalent: "1 & 2/3", value: 1.66 },
  { min: 1.7, max: 1.85, equivalent: "1 & 3/4", value: 1.75 },
  { min: 1.85, max: 2, equivalent: "2", value: 2 },
];

export const createMealPlan = (C: string[], P: string[], F: string[], S: string[], V: string[]): MealPlan => {
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
        foods:{ [P[0]]:  0.5, [C[1]]:  0.3, [F[0]]:  0.1, [V[0]]:  0.05, [V[1]]:  0.05}},
      snack:{proportion:0.1,
        foods:{ [S[0]]:  0.55, [S[1]]:  0.45 }},
      dinner:{proportion:0.4,
        foods:{ [C[0]]:  0.3, [P[1]]:  0.65, [V[0]]:  0.05 }},
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