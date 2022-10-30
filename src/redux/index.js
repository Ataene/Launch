import { combineReducers } from "redux";
import { itemReducer } from "./reducer";

const allReducers = combineReducers({
    itemReducer,
});

export default allReducers;