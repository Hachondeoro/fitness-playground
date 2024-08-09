import { createSlice } from "@reduxjs/toolkit";

interface IStats {
  weight: number;
  height: number;
  age: number;
  sex: "male" | "female";
  goal: "cut" | "maintain" | "gain";
  calories: number;
  bmr: number;
  mealplan: "standard" | "custom";
}

const initialState: IStats = {
  weight: 70,
  height: 170,
  age: 28,
  sex: "male",
  goal: "cut",
  calories: 2245,
  bmr: 1461,
  mealplan: "custom",
};

export const BodyData = createSlice({
  name: "bodydata",
  initialState,
  reducers: {
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
    updateHeight: (state, action) => {
      state.height = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateSex: (state, action) => {
      state.sex = action.payload;
    },
    updateGoal: (state, action) => {
      state.goal = action.payload;
    },
    updateMealPlan: (state, action) => {
      state.mealplan = action.payload;
    },
    updateCalories: (state, action) => {
      state.calories = action.payload;
    },
    updateBMR: (state, action) => {
      state.bmr = action.payload;
    },
    resetBodyData: (state) => {
      // RESET STATE
    },
  },
});

export const {
  updateWeight,
  updateHeight,
  updateAge,
  updateSex,
  updateGoal,
  updateCalories,
  updateBMR,
  updateMealPlan,
  resetBodyData,
} = BodyData.actions;

export default BodyData.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
