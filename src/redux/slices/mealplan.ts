import { createSlice } from "@reduxjs/toolkit";

interface IMeals {
  carb: string[];
  protein: string[];
  fat: string[];
  snack: string[];
  veggies: string[];
}

const initialState: IMeals = {
  carb: ["Muesli", "Potatoes", "Rice"],
  protein: ["Tuna", "Steak"],
  fat: ["Avocado", "Tofu"],
  snack: ["Blueberries", "Apples"],
  veggies: ["Broccoli", "Carrots"],
};

export const MealPlan = createSlice({
  name: "mealplan",
  initialState,
  reducers: {
    updateCarb: (state, action) => {
      const food = action.payload;
      state.carb = food;
    },
    updateProtein: (state, action) => {
      const food = action.payload;
      state.protein = food;
    },
    updateFat: (state, action) => {
      const food = action.payload;
      state.fat = food;
    },
    updateSnack: (state, action) => {
      const food = action.payload;
      state.snack = food;
    },
    updateVeggies: (state, action) => {
      const food = action.payload;
      state.veggies = food;
    },
  },
});

export const {
  updateCarb,
  updateProtein,
  updateFat,
  updateSnack,
  updateVeggies,
} = MealPlan.actions;

export default MealPlan.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
