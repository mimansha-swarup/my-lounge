import { filterActions } from "./constant";

export const filterReducer = (state, action) => {
  const { SORT, SET_CATEGORY, SET_SEARCH_QUERY, CLEAR } = filterActions;
  switch (action.type) {
    case SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_CATEGORY:
      if (state.category.includes(action.payload)) {
        return {
          ...state,
          category: state.category.filter(
            (eachCategory) => eachCategory !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          category: [...state.category, action.payload],
        };
      }
    case CLEAR:
      return {
        sortBy: null,
        searchQuery: "",
        category: [],
      };

    default:
      break;
  }
};
