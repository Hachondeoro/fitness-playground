import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "counter",
    initialState: {
        value: 100,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) => data.results[0].dob.age)
        .then((data) => dispatch(incrementByAmount(data)))
        .then((data) => console.log(data));

    // setTimeout(() => {
    //   dispatch(incrementByAmount(amount));
    // }, 100);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default slice.reducer;
