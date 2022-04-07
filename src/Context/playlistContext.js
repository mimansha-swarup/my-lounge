import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { playlistApi } from "../Helper/Api/Api";
import { useToast, useAuth } from "./index";
import axios from "axios";
import { playlistsReducer } from "../Reducer/playlist-reducer";
import { playlistActions } from "../Reducer/constant";

const playListContext = createContext();

export const usePlaylist = () => useContext(playListContext);

export const PlayListProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const { setToastData } = useToast();
  const { authState } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(playlistApi, {
          headers: { authorization: authState?.token },
        });
        if (response.status === 200) {
          setPlaylists(response.data.playlists);
        }
      } catch (error) {
        console.log("error from use effect in playlist Context", error);

        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "error", message: error.message },
        ]);
      }
    })();
  }, []);
  const [playlistsState, playlistsDispatch] = useReducer(playlistsReducer, {
    playlists: playlists,
  });
  const postPlaylistDataToServer = async (
    token,
    title,
    description,
    playlistsDispatch
  ) => {
    try {
      const response = await axios.post(
        playlistApi,
        {
          playlist: { title, description },
        },
        {
          headers: { authorization: token },
        }
      );

      if (response.status === 201) {
        playlistsDispatch({
          type: playlistActions.SET_PLAYLISTS,
          payload: response.data.playlists,
        });
      }
    } catch (error) {
      console.log(
        "error from  postPlaylistDataToServer in playlist Context",
        error
      );
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const deletePlaylistDataFromServer = async (
    token,
    apiPath,
    playlistsDispatch
  ) => {
    try {
      const response = await axios.delete(
        apiPath,

        {
          headers: { authorization: token },
        }
      );

      if (response.status === 200) {
        playlistsDispatch({
          type: playlistActions.SET_PLAYLISTS,
          payload: response.data.playlists,
        });
      }
    } catch (error) {
      console.log(
        "error from  postPlaylistDataToServer in playlist Context",
        error
      );
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  // video action
  const postVideoDataToPlaylistServer = async (
    token,
    api,
    video,
    playlistsDispatch
  ) => {
    try {
      const response = await axios.post(
        api,
        {
          video,
        },
        {
          headers: { authorization: token },
        }
      );

      console.log(response.data);
      if (response.status === 201) {
        playlistsDispatch({
          type: playlistActions.UPDATE_PLAYLIST,
          payload: response.data.playlist,
        });
      }
    } catch (error) {
      console.log(
        "error from  postPlaylistDataToServer in playlist Context",
        error
      );
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const deleteVideoDataFromPlaylistServer = async (
    token,
    api,
    playlistsDispatch
  ) => {
    try {
      const response = await axios.delete(
        api,

        {
          headers: { authorization: token },
        }
      );

      if (response.status === 200) {
        playlistsDispatch({
          type: playlistActions.UPDATE_PLAYLIST,
          payload: response.data.playlist,
        });
      }
    } catch (error) {
      console.log(
        "error from  postPlaylistDataToServer in playlist Context",
        error
      );
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };

  return (
    <playListContext.Provider
      value={{
        playlistsState,
        playlistsDispatch,
        postPlaylistDataToServer,
        deletePlaylistDataFromServer,
        postVideoDataToPlaylistServer,
        deleteVideoDataFromPlaylistServer,
      }}
    >
      {children}
    </playListContext.Provider>
  );
};
