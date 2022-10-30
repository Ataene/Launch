import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import allReducers from "./index"
import { itemReducer } from "./reducer";

const store = createStore(
    itemReducer,
    applyMiddleware(thunk)
);

export default store;
