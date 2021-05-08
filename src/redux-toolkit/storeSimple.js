import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/components/redux-toolkit/counterSlice";
import formulaReducer from "@/components/redux-toolkit/formulaSlice";

export default configureStore({
    reducer: { counter: counterReducer, magicnumber: formulaReducer },
});
