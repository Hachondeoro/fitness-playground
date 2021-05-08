import { configureStore } from "@reduxjs/toolkit";
import weightReducer from "@redux/slices/calories";

// import rootReducer from "./reducers";

const store = configureStore({
    reducer: {
        weight: weightReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
