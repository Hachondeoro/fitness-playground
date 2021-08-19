export const conversion = {
  Muesli: { foodCalories: 360, measureGrams: 140, measure: "cups of Muesli" }, // 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
  "Peanut Butter": { foodCalories: 600, measureGrams: 13, measure: "spoons of Peanut Butter" }, // 40 grams pb ~ 3 spoons (1 regular spoon is 13 grams)
  Honey: { foodCalories: 320, measureGrams: 10, measure: "spoons of Honey" }, // 40 grams of honey ~ 4 spoons  (1 regular spoon is 10 grams)
  greek_yogurt: { foodCalories: 100, measureGrams: 250, measure: "cups of Greek Yogurt" }, // 260 grams greek yogurt ~ 1 whole medium cup
  Tuna: { foodCalories: 110, measureGrams: 120, measure: "cans of Tuna" }, // 250 grams ~ 2 cans (120 grams each)
  Lettuce: { foodCalories: 15, measureGrams: 250, measure: "Lettuce heads" }, // 250 grams lettuce ~ 1/3 regular sized lettuce
  Rice: { foodCalories: 360, measureGrams: 100, measure: "cups of Cooked Rice" }, // 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
  Apples: { foodCalories: 52, measureGrams: 130, measure: "small Apples" }, // 1 medium apple ~ 130 grams
  Oranges: { foodCalories: 60, measureGrams: 150, measure: "small Oranges" }, // 150 grams is the average weight of a medium sized orange
  "Chicken breast": { foodCalories: 110, measureGrams: 200, measure: "Chicken breast fillets" }, // XXXX average weight of a chicken fillet breast
  Steak: { foodCalories: 235, measureGrams: 250, measure: "small Steak scotch fillet" }, // 260 grams of steak ~ 1 6$ scotch fillet
  Potatoes: { foodCalories: 85, measureGrams: 110, measure: "small Potatoes" }, // potato average
  "Sweet potatoes": { foodCalories: 85, measureGrams: 110, measure: "small Sweet Potatoes" }, // potato average
  Coffee: { foodCalories: 25, measureGrams: 100, measure: "cups of Coffee" }, //
  Veggies: { foodCalories: 20, measureGrams: 250, measure: "handful of Veggies" }, //
  Cheese: { foodCalories: 360, measureGrams: 1, measure: "grams of Cheese" }, //
};

// 6 in total, for each meal plan (2 for maintain, 2 for fasting, 2 for bulk)
export const Data = {
  gain: {
    breakfast: {
      proportion: 0.28,
      foods: { Muesli: 0.55, "Peanut Butter": 0.3, Honey: 0.15 },
    },
    lunch: {
      proportion: 0.4,
      foods: { Tuna: 0.25, Lettuce: 0.03, Rice: 0.72 },
    },
    snack: {
      proportion: 0.06,
      foods: { Apples: 1 },
    },
    dinner: {
      proportion: 0.25,
      foods: { Potatoes: 0.35, Steak: 0.65 },
    },
  },
  cut: {
    breakfast: {
      proportion: 0.1,
      foods: { Coffee: 0.3 },
    },
    lunch: {
      proportion: 0.5,
      foods: { Tuna: 0.3, Lettuce: 0.04, "Sweet potatoes": 0.3, Cheese: 0.036 },
    },
    snack: {
      proportion: 0.1,
      foods: { Apples: 1 },
    },
    dinner: {
      proportion: 0.4,
      foods: { Rice: 0.5, "Chicken breast": 0.45, Veggies: 0.05 },
    },
  },
  maintain: {
    breakfast: {
      proportion: 0.32,
      foods: { Muesli: 0.55, "Peanut Butter": 0.3, Honey: 0.15 },
    },
    lunch: {
      proportion: 0.36,
      foods: { Tuna: 0.32, Lettuce: 0.04, Rice: 0.64 },
    },
    snack: {
      proportion: 0.07,
      foods: { Apples: 1 },
    },
    dinner: {
      proportion: 0.25,
      foods: { Potatoes: 0.35, Steak: 0.65 },
    },
  },
};
