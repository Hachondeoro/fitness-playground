import { createSlice } from "@reduxjs/toolkit";

interface IMeals {
  carb: string[];
  protein: string[];
  fat: string[];
  snack: string[];
  veggies: string[];
}

const initialState: IMeals = {
  // carb: ["Muesli", "Toasted Bread", "Potatoes", "Rice"],
  // protein: ["Tuna", "Steak"],
  // fat: ["Avocado", "Tofu"],
  // snack: ["Blueberries", "Apples"],
  // veggies: ["Broccoli", "Carrots"],
  carb: [],
  protein: [],
  fat: [],
  snack: [],
  veggies: [],
};
export const MealPlan = createSlice({
  name: "mealplan",
  initialState,
  reducers: {
    updateCarb: (state, action) => {
      state.carb = action.payload;
    },
    updateProtein: (state, action) => {
      state.protein = action.payload;
    },
    updateFat: (state, action) => {
      state.fat = action.payload;
    },
    updateSnack: (state, action) => {
      state.snack = action.payload;
    },
    updateVeggies: (state, action) => {
      state.veggies = action.payload;
    },
    resetFoodChoices: () => initialState,
  },
});
export const { updateCarb, updateProtein, updateFat, updateSnack, updateVeggies, resetFoodChoices } = MealPlan.actions;
export default MealPlan.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
