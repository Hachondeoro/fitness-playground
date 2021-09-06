import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  weight: number;
  height: number;
  age: number;
  sex: boolean;
  goal: string;
  calories: number;
  bmr: number;
}

const initialState: ICounter = {
  weight: 70,
  height: 170,
  age: 28,
  sex: true,
  goal: "maintain",
  calories: null,
  bmr: null,
};

export const BodyData = createSlice({
  name: "bodydata",
  initialState,
  reducers: {
    updateWeight: (state, action) => {
      const number = action.payload;
      state.weight = number;
    },
    updateHeight: (state, action) => {
      const number = action.payload;
      state.height = number;
    },
    updateAge: (state, action) => {
      const number = action.payload;
      state.age = number;
    },
    updateSex: (state, action) => {
      const boolean = action.payload;
      state.sex = boolean;
    },
    updateGoal: (state, action) => {
      const string = action.payload;
      state.goal = string;
    },
    updateCalories: (state, action) => {
      const number = action.payload;
      state.calories = number;
    },
    updateBMR: (state, action) => {
      const number = action.payload;
      state.bmr = number;
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
} = BodyData.actions;

export default BodyData.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
