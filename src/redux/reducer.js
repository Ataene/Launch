import { ActionTypes } from "./ActionTypes";
const initialState = {
  items: [],
  selectedItem: null,
  postalInfo: null,
};

export const itemReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, items: payload };
    case ActionTypes.FETCH_ITEM:
      return { ...state, selectedItem: payload };
    case ActionTypes.SEARCH_POSTAL:
        console.log("Line 16")
      return { ...state, postalInfo: payload };
    default:
      return state;
  }
};

export const deleteSelectedItem = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.DELETE_SELECTED_ITEM:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};

export const selectedItem = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ITEM:
      return { ...state, ...payload };
    case ActionTypes.DELETE_SELECTED_ITEM:
      return {};
    default:
      return state;
  }
};
