/* eslint-disable prettier/prettier */
// prettier-ignore
export const conversion = {
  Muesli: { foodCalories: 360, protein: 5, measureGrams: 140, 
          measure: "cups of Muesli", roundFactor: 10 },                                                // 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
  "Peanut Butter": { foodCalories: 600, protein: 12.5, measureGrams: 13, 
          measure: "spoons of Peanut Butter", roundFactor: 1 },                                        // 40 grams pb ~ 3 spoons (1 regular spoon is 13 grams)
  Honey: { foodCalories: 320, protein: 0, measureGrams: 10, 
          measure: "spoons of Honey", roundFactor: 1 },                                                // 40 grams of honey ~ 4 spoons  (1 regular spoon is 10 grams)
  greek_yogurt: { foodCalories: 100, protein: 8, measureGrams: 250, 
          measure: "cups of Greek Yogurt", roundFactor: 1 },                                           // 260 grams greek yogurt ~ 1 whole medium cup
  Tuna: { foodCalories: 110, protein: 25, measureGrams: 120, 
          measure: "cans of Tuna", roundFactor: 1 },                                                   // 250 grams ~ 2 cans (120 grams each)
  Lettuce: { foodCalories: 15, protein: 0, measureGrams: 250, 
          measure: "Lettuce heads", roundFactor: 2 },                                                  // 250 grams lettuce ~ 1/3 regular sized lettuce
  Rice: { foodCalories: 360, protein: 4, measureGrams: 100, 
          measure: "cups of Cooked Rice", roundFactor: 20 },                                            // 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
  Apples: { foodCalories: 52, protein: 0, measureGrams: 130, 
          measure: "small Apples", roundFactor: 1 },                                                   // 1 medium apple ~ 130 grams
  Oranges: { foodCalories: 60, protein: 0, measureGrams: 150, 
          measure: "small Oranges", roundFactor: 1 },                                                  // 150 grams is the average weight of a medium sized orange
  "Chicken breast": { foodCalories: 110, protein: 20, measureGrams: 200, 
          measure: "Chicken breast fillets", roundFactor: 2 },                                         // XXXX average weight of a chicken fillet breast
  Steak: { foodCalories: 235, protein: 20, measureGrams: 250, 
          measure: "small Steak scotch fillet", roundFactor: 5 },                                      // 260 grams of steak ~ 1 6$ scotch fillet
  Potatoes: { foodCalories: 85, protein: 0, measureGrams: 110, 
          measure: "small Potatoes", roundFactor: 2 },                                                 // potato average
  "Sweet potatoes": { foodCalories: 85, protein: 0, measureGrams: 110, 
          measure: "small Sweet Potatoes", roundFactor: 2 },                                           // potato average
  Coffee: { foodCalories: 25, protein: 0, measureGrams: 10, 
          measure: "cups of Coffee", roundFactor: 2 },                                                 //
  Veggies: { foodCalories: 20, protein: 0, measureGrams: 200, 
          measure: "handful of Veggies", roundFactor: 1 },                                             //
  Cheese: { foodCalories: 360, protein: 25, measureGrams: 10, 
          measure: "small slices of Cheese", roundFactor: 1 },                                          //
};

// 6 in total, for each meal plan (2 for maintain, 2 for fasting, 2 for bulk)
export const SampleMealOne = {
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
      proportion: 0.01,
      foods: { Coffee: 0.3 },
    },
    lunch: {
      proportion: 0.5,
      foods: { Tuna: 0.3, Lettuce: 0.04, "Sweet potatoes": 0.3, Cheese: 0.36 },
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

export const SampleMealTwo = {
  gain: {
    breakfast: {
      proportion: 0.28,
      foods: { Muesli: 0.15, "Peanut Butter": 0.7, Honey: 0.15 },
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
      proportion: 0.01,
      foods: { Coffee: 0.3 },
    },
    lunch: {
      proportion: 0.5,
      foods: { Tuna: 0.3, Lettuce: 0.04, "Sweet potatoes": 0.3, Cheese: 0.36 },
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
