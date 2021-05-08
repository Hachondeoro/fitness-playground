import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import calories from "@redux/slices/calories";

const rootReducer = combineReducers({ counter, calories });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
