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
      state.mainTab = action.payload;
    },
    updateRoutineTab: (state, action) => {
      state.routineTab = action.payload;
    },
  },
});

export const { updateMainTab, updateRoutineTab } = Controls.actions;

export default Controls.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
