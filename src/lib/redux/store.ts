import bodyReducer from "lib/redux/slices/bodydata";
import mealReducer from "lib/redux/slices/mealplan";
import controlsReducer from "lib/redux/slices/controls";
import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    bodydata: bodyReducer,
    mealplan: mealReducer,
    controls: controlsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;