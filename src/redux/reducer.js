import { ActionTypes } from "./ActionTypes";
const initialState = {
  item: [{
    id: 1,
    title: "Working",
    you: "Emma",
  }],
};

export const itemReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
      return { ...state, item: payload };
      case ActionTypes.FETCH_ITEMS:
        return { ...state, item: payload }
    default:
      return state;
  }
};

export const deleteSelectedItem = ( state, { type, payload } ) => {
    switch (type) {
      case ActionTypes.DELETE_SELECTED_ITEM:
        return state.filter((item) => item.id !== type.payload.id);
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
