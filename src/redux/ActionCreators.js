import { ActionTypes } from "./ActionTypes";


//HOME PAGE
export const fetchItems = () => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20`; 

  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();

      dispatch({ type: ActionTypes.FETCH_ITEMS, payload: responseData });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchItem = (id) => {
  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      dispatch({ type: ActionTypes.FETCH_ITEM, payload: responseData });
    } catch (error) {
      console.log(error.message);
    }
  };
};

///SEARCH POSTAL CODE

export const searchPostal = (postal) => {
    const dataUrl = `https://api.zippopotam.us/us/${postal}`; 
  
    return async (dispatch) => {
      try {
        const response = await fetch(dataUrl);
        let responseData = await response.json();
        dispatch({ type: ActionTypes.SEARCH_POSTAL, payload: responseData });
      } catch (error) {
        console.log(error.message);
      }
    };
  };


export const updateSelectedItem = (item) => {
  return {
    type: ActionTypes.UPDATE_SELECTED_ITEM,
    payload: item,
  };
};

export const deleteSelectedItem = () => {
  return {
    type: ActionTypes.DELETE_SELECTED_ITEM,
  };
};
