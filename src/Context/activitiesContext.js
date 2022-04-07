import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useToast } from "./toastContext";
import axios from "axios";
import {
  concatedApi,
  historyApi,
  likesApi,
  watchlaterApi,
} from "../Helper/Api/Api";
import { useAuth } from "./authContext";
import { activitiesReducer } from "../Reducer/activities-reducer";
import { activitiesActions } from "../Reducer/constant";

const activitiesContext = createContext();

export const useActivities = () => useContext(activitiesContext);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState({
    likes: [],
    history: [],
    watchlater: [],
  });
  const { setToastData } = useToast();
  const { authState } = useAuth();

  // function to fetch data from all path like,history, watchLater
  const getUserActivityData = async (apiPath, dataKey) => {
    try {
      const response = await axios.get(apiPath, {
        headers: { authorization: authState?.token },
      });
      if (response.status === 200) {
        setActivities((prevActivities) => ({
          ...prevActivities,
          [dataKey]: response.data[dataKey],
        }));
      }
    } catch (error) {
      console.log(error.message);

      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };

  useEffect(() => {
    if (authState?.token) {
      getUserActivityData(likesApi, "likes");
      getUserActivityData(watchlaterApi, "watchlater");
      getUserActivityData(historyApi, "history");
    }
  }, [authState?.token]);

  const [activitiesState, activitiesDispatch] = useReducer(
    activitiesReducer,
    activities
  );

  // function to post data to all path like,history, watchLater
  const postUserActivityData = async (
    token,
    video,
    apiPath,
    dataKey,
    activitiesDispatch
  ) => {
    try {
      const response = await axios.post(
        apiPath,
        { video },
        { headers: { authorization: token } }
      );

      if (response.status === 201) {
        activitiesDispatch({
          type: activitiesActions[dataKey.toUpperCase()],
          payload: response.data[dataKey],
        });
        if (dataKey !== "history")
          setToastData((prevToastData) => [
            ...prevToastData,
            {
              type: "success",
              message: `Added to ${dataKey} List`,
            },
          ]);
      }
    } catch (error) {
      console.log(error);
      setToastData((prevToastData) => [
        ...prevToastData,
        {
          type: "error",
          message: error.message,
        },
      ]);
    }
  };
  // function to delete data keys: like,history, watchLater
  const deleteUserActivityData = async (
    token,
    video,
    apiPath,
    dataKey,
    activitiesDispatch
  ) => {
    try {
      const response = await axios.delete(concatedApi(apiPath, video._id), {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        activitiesDispatch({
          type: activitiesActions[dataKey.toUpperCase()],
          payload: response.data[dataKey],
        });
        setToastData((prevToastData) => [
          ...prevToastData,
          {
            type: "warning",
            message: `Removed From ${dataKey} List`,
          },
        ]);
      }
    } catch (error) {
      console.log(error.message);
      setToastData((prevToastData) => [
        ...prevToastData,
        {
          type: "error",
          message: error.message,
        },
      ]);
    }
  };

  return (
    <activitiesContext.Provider
      value={{
        activitiesState,
        activitiesDispatch,
        postUserActivityData,
        deleteUserActivityData,
      }}
    >
      {children}
    </activitiesContext.Provider>
  );
};
