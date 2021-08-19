import bodyReducer from "@redux/slices/bodydata";
import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    bodydata: bodyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
