import { playlistActions } from "./constant";

export const playlistsReducer = (state, action) => {
  switch (action.type) {
    case playlistActions.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };
    case playlistActions.UPDATE_PLAYLIST:
      console.log(action.payload)
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };

    default:
      break;
  }
};
