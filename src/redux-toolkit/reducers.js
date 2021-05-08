import { combineReducers } from "redux";
import counterReducer from "@/components/redux-toolkit/counterSlice";
import formulaReducer from "@/components/redux-toolkit/formulaSlice";

const appReducer = combineReducers({
    counter: counterReducer,
    magicnumber: formulaReducer,
});

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === "USER_LOGGED_OUT") {
        // storage.removeItem("persist:root");
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
