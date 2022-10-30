import { combineReducers } from "redux";

import { itemReducer } from "./reducer";

const allReducers = combineReducers({
    allItems: itemReducer,
});

export default allReducers;