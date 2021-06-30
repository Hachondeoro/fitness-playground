import { configureStore } from "@reduxjs/toolkit";
import bodyReducer from "@redux/slices/bodydata";

// import rootReducer from "./reducers";

const store = configureStore({
    reducer: {
        bodydata: bodyReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
