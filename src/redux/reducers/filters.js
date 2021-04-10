import { SET_SORT_BY, SET_CATEGORY } from '../actions/actionTypes';

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
