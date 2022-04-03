import { authActions } from "./constant";

export const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        name:action.payload.name,
        isAuth: action.payload.isAuth,
      };
    case authActions.LOGOUT:
      return {
        ...state,
        token: "",
        name:"",
        isAuth: false,
      };

    default:
      break;
  }
};
