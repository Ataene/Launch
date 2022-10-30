import { ActionTypes } from "./ActionTypes";

export const fetchItem = () => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      dispatch({ type: ActionTypes.FETCH_ITEMS, payload: responseData.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//Single product with an Id
export const fetchItems = (id) => {
    const dataUrl = `https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20/${id}`;
    return async (dispatch) => {
      try {
        const response = await fetch(dataUrl);
        let responseData = await response.json();
        dispatch({ type: ActionTypes.SELECTED_ITEM, payload: responseData.data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

export const getItem = (item) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: item,
  };
};

export const setItem = (item) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: item,
  };
};

export const selectedItem = (item) => {
  return {
    type: ActionTypes.SELECTED_ITEM,
    payload: item,
  };
};

export const updateSelectedItem = (item) => {
  return {
    type: ActionTypes.UPDATE_SELECTED_ITEM,
    payload: item,
  };
};

export const removeSelectedItem = () => {
  return {
    type: ActionTypes.DELETE_SELECTED_ITEM,
  };
};
