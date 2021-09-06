import { createSlice } from "@reduxjs/toolkit";

interface IMeals {
  carb: string[];
  protein: string[];
  fat: string[];
  snack: string[];
}

const initialState: IMeals = {
  carb: [],
  protein: [],
  fat: [],
  snack: [],
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
  },
});

export const {
  updateCarb,
  updateProtein,
  updateFat,
  updateSnack,
} = MealPlan.actions;

export default MealPlan.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
