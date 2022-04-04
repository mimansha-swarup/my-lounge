import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { loginPostApi, signupPostApi } from "../Helper/Api/Api";
import { authReducer } from "../Reducer/auth-reducer";
import { useNavigate } from "react-router-dom";
import { authActions } from "../Reducer/constant";
import { useToast } from "./toastContext";

const initialState = {
  token: JSON.parse(localStorage.getItem("jwtAuth"))?.token || "",
  name: JSON.parse(localStorage.getItem("jwtAuth"))?.name || "",
  isAuth: JSON.parse(localStorage.getItem("jwtAuth"))?.isAuth || false,
};

const authContext = createContext();


export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const { setToastData } = useToast();
  const navigate = useNavigate();

  const Login = async (email, password) => {
    try {
      const response = await axios.post(loginPostApi, { email, password });

      if (response.status === 200) {
        const { encodedToken,foundUser } = response.data;

        localStorage.setItem(
          "jwtAuth",
          JSON.stringify({ token: encodedToken, name: foundUser.firstName, isAuth: true })
        );
        authDispatch({
          type: authActions.LOGIN,
          payload: {
            token: encodedToken,
            name: foundUser.firstName,
            isAuth: true,
          },
        });
        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "success", message: `Welcome ${foundUser.firstName}` },
        ]);
        navigate("/");
      }
    } catch (error) {
      console.log("its error", error.message);
      console.log(" error in details", error);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const Signup = async (email, password, firstName, lastName) => {
    try {
      const response = await axios.post(signupPostApi, {
        firstName,
        lastName,
        email,
        password,
      });
  

      if (response.status === 201) {
        const { encodedToken,createdUser } = response.data;

        localStorage.setItem(
          "jwtAuth",
          JSON.stringify({ token: encodedToken,name: createdUser.firstName, isAuth: true, })
        );
        authDispatch({
          type: authActions.LOGIN,
          payload: {
            token: encodedToken,
            isAuth: true,
            name: createdUser.firstName,
          },
        });
        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "success", message:  `Welcome ${createdUser.firstName}` },
        ]);
        navigate("/");
      }
    } catch (error) {
      console.log("its error", error.message);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const Logout = () => {
    localStorage.removeItem("jwtAuth");
    authDispatch({
      type: authActions.Logout,
    });
    setToastData((prevToastData) => [
      ...prevToastData,
      { type: "success", message: "Loged Out" },
    ]);
  };

  return (
    <authContext.Provider
      value={{ authState, authDispatch, Login, Logout, Signup }}
    >
      {children}
    </authContext.Provider>
  );
};
