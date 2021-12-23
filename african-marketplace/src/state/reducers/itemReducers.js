// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import { ITEM_START, ITEM_SUCCESS, ITEM_ERROR, ITEM_ADD } from '../actions';

export const initialState = {
  items: [
    {
      category: '',
      description: '',
      item_id: '',
      location: '',
      name: '',
      price: '',
      user_id: '',
      url: '',
    },
  ],
  isLoading: false,
  itemError: '',
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_START:
      return {
        ...state,
        items: [],
        isLoading: true,
        itemError: '',
      };
    case ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        itemError: '',
      };
    case ITEM_ERROR:
      return {
        ...state,
        items: [],
        isLoading: false,
        itemError: action.payload,
      };
    case ITEM_ADD:
      const newItem = {
        id: '###',
        item: action.payload,
        category: action.payload,
        location: action.payload,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    default:
      return state;
  }
};

export default itemReducer;
