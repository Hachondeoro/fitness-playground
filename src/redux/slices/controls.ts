import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  mainTab: number;
  routineTab: number;
}

const initialState: ICounter = {
  mainTab: 0,
  routineTab: 0,
};

export const Controls = createSlice({
  name: "controls",
  initialState,
  reducers: {
    updateMainTab: (state, action) => {
      const number = action.payload;
      state.mainTab = number;
    },
    updateRoutineTab: (state, action) => {
      const number = action.payload;
      state.routineTab = number;
    },
  },
});

export const {
  updateMainTab,
  updateRoutineTab,
} = Controls.actions;

export default Controls.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
