import { activitiesActions } from "./constant";

export const activitiesReducer = (state, action) => {
  switch (action.type) {

    case activitiesActions.LIKES:
      return {
        ...state,
        likes: action.payload,
      };

    case activitiesActions.WATCHLATER:
      return {
        ...state,
        watchlater: action.payload,
      };

    case activitiesActions.HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    default:
      break;
  }
};
