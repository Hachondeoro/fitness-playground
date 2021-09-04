import bodyReducer from "@redux/slices/bodydata";
import mealReducer from "@redux/slices/mealplan";
import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    bodydata: bodyReducer,
    mealplan: mealReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
