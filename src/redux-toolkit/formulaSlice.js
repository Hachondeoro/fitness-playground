import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "magicnumber",
  initialState: {
    value: 2,
  },
  reducers: {
    setSame: (state, action) => {
      const number = action.payload;
      state.value = number;
    },
    reset: (state) => {
      return 0;
    },
  },
});

export const { setSame, reset } = slice.actions;
export const selectMagicnumber = (state) => state.magicnumber.value;

export default slice.reducer;
