import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";

interface ICounter {
    count: number;
}

const initialState: ICounter = {
    count: 100,
};

export const Weight = createSlice({
    name: "weight",
    initialState,
    reducers: {
        increase: (state) => {
            state.count++;
        },
        decrease: (state) => {
            state.count--;
        },
        setSame: (state, action) => {
            const number = action.payload;
            state.count = number;
        },
    },
});

export const { increase, decrease, setSame } = Weight.actions;
export const selectWeight = (state: RootState) => state.weight.count;

export default Weight.reducer;
// 2. Then incorporate it into the Calories.tsx to multiply it by 30.
// 3. It should also be incorporated in the MAIN component, to sync at the same time in MAIN.tsx and CALORIES.tsx
