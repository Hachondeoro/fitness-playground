/* eslint-disable prettier/prettier */
import { foodsByClass } from "lib/interfaces";

// prettier-ignore
export const conversion:foodsByClass = {
  "Muesli": { foodCalories: 360, protein: 5, class:"carbs",
          measure: "cups of Muesli", measureGrams: 140, roundFactor: 10},
  "Oats": { foodCalories: 360, protein: 5, class:"carbs",
          measure: "cups of Oats", measureGrams: 140, roundFactor: 10},
  "Quinoa (Cooked)": { foodCalories: 150, protein: 5, class:"carbs",
          measure: "cups of Cooked quinoa", measureGrams: 160, roundFactor: 10},
  "Rice": { foodCalories: 360, protein: 4, class:"carbs",
          measure: "cups of cooked Rice", measureGrams: 100, roundFactor: 20},
  "Brown Rice": { foodCalories: 360, protein: 4, class:"carbs",
          measure: "cups of cooked Brown Rice", measureGrams: 100, roundFactor: 20},
  "Mixed grain Bread": { foodCalories: 250, protein: 4, class:"carbs",
          measure: "slices of mixed grain bread", measureGrams: 47, roundFactor: 20},
  "Potatoes": { foodCalories: 85, protein: 0, class:"carbs",
          measure: "small Potatoes", measureGrams: 110, roundFactor: 2},
  "Sweet potatoes": { foodCalories: 85, protein: 0, class:"carbs",
          measure: "small Sweet Potatoes", measureGrams: 110, roundFactor: 2},
  "Honey": { foodCalories: 320, protein: 0, class:"carbs",
          measure: "spoons of Honey", measureGrams: 10, roundFactor: 1},
  "Peanut Butter": { foodCalories: 600, protein: 15, class:"fats",
          measure: "spoons of Peanut Butter", measureGrams: 13, roundFactor: 1},
  "Avocado": { foodCalories: 160, protein: 0, class:"fats",
          measure: "Avocados", measureGrams: 200, roundFactor: 10},
  "Tofu": { foodCalories: 70, protein: 5, class:"fats",
          measure: "small servings Tofu", measureGrams: 125, roundFactor: 1},
  "Almonds": { foodCalories: 600, protein: 15, class:"fats",
          measure: "spoons of Almonds", measureGrams: 13, roundFactor: 1},
  "Cashews": { foodCalories: 600, protein: 15, class:"fats",
          measure: "spoons of Cashews", measureGrams: 13, roundFactor: 1},
  "Chicken breast": { foodCalories: 110, protein: 20, class:"protein",
          measure: "grams of chicken breast", measureGrams: 1, roundFactor: 10},
  "Steak": { foodCalories: 235, protein: 20, class:"protein",
          measure: "grams of steak", measureGrams: 1, roundFactor: 10},
  "Tuna": { foodCalories: 130, protein: 27, class:"protein",
          measure: "gr of Tuna", measureGrams: 1, roundFactor: 10},
  "Fish": { foodCalories: 140, protein: 20, class:"protein",
          measure: "grams of Fish", measureGrams: 1, roundFactor: 10},
  "Eggs": { foodCalories: 140, protein: 14, class:"protein",
          measure: "eggs", measureGrams: 50, roundFactor: 1},
  "Cheese": { foodCalories: 360, protein: 25, class:"protein",
          measure: "small slices of Cheese", measureGrams: 10, roundFactor: 1},
  "Goat cheese": { foodCalories: 360, protein: 25, class:"protein",
          measure: "small slices of Goat Cheese", measureGrams: 10, roundFactor: 1},
  "Greek Yoghurt": { foodCalories: 100, protein: 8, class:"protein",
          measure: "cups of Greek Yogurt", measureGrams: 250, roundFactor: 1},
  "Lettuce": { foodCalories: 15, protein: 0, class:"veggies",
          measure: "Lettuce heads", measureGrams: 250, roundFactor: 2},
  "Veggies": { foodCalories: 20, protein: 0, class:"veggies",
          measure: "handful of Veggies", measureGrams: 200, roundFactor: 1},
  "Broccoli": { foodCalories: 34, protein: 0, class:"veggies",
          measure: "servings of Broccoli", measureGrams: 150, roundFactor: 1},
  "Cauliflower": { foodCalories: 25, protein: 0, class:"veggies",
          measure: "cups of Cauliflower", measureGrams: 100, roundFactor: 1},
  "Apples": { foodCalories: 52, protein: 0, class:"snack",
          measure: "small Apples", measureGrams: 130, roundFactor: 1},
  "Oranges": { foodCalories: 60, protein: 0, class:"snack",
          measure: "small Oranges", measureGrams: 150, roundFactor: 1},
  "Strawberries": { foodCalories: 30, protein: 0, class:"snackGrams",
          measure: "grams of Strawberries", measureGrams: 1, roundFactor: 10},
  "Blueberries": { foodCalories: 60, protein: 0, class:"snackGrams",
          measure: "grams of Blueberries", measureGrams: 1, roundFactor: 10},
  "Coffee": { foodCalories: 25, protein: 0, class:"others",
          measure: "cups of Coffee", measureGrams: 10, roundFactor: 2},
  
  
};

export const SampleMealOne = {
  gain: {
    breakfast: {
      proportion: 0.28,
      foods: { Muesli: 0.55, "Peanut Butter": 0.3, Honey: 0.15 },
    },
    lunch: {
      proportion: 0.4,
      foods: { "Chicken breast": 0.35, Cauliflower: 0.03, Carrots:0.02, Rice: 0.60 },
    },
    snack: {
      proportion: 0.06,
      foods: { Blueberries: 1 },
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
      foods: { Tuna: 0.3, Broccoli: 0.1, "Brown Rice": 0.4, Almonds: 0.2 },
    },
    snack: {
      proportion: 0.1,
      foods: { Apples: 1 },
    },
    dinner: {
      proportion: 0.4,
      foods: { Rice: 0.5, "Chicken breast": 0.45, Cauliflower: 0.05 },
    },
  },
  maintain: {
    breakfast: {
      proportion: 0.32,
      foods: {
        Muesli: 0.55,
        "Peanut Butter": 0.3,
        Honey: 0.15,
      },
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

// 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
// 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
// 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
// 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
// 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
// 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
// potato average
// 40 grams of honey ~ 4 spoons  (1 regular spoon is 10 grams)
// 40 grams pb ~ 3 spoons (1 regular spoon is 13 grams)
// 260 grams greek yogurt ~ 1 whole medium cup
// 250 grams lettuce ~ 1/3 regular sized lettuce
// 1 medium apple ~ 130 grams
// 150 grams is the average weight of a medium sized orange
// XXXX average weight of a chicken fillet breast
// 260 grams of steak ~ 1 6$ scotch fillet
// 250 grams ~ 2 cans (120 grams each)
