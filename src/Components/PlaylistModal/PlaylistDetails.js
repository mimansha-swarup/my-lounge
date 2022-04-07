import { useAuth, usePlaylist } from "../../Context";
import { AiFillDelete } from "react-icons/ai";
import { concatedApi, playlistApi } from "../../Helper/Api/Api";
import { isPresent } from "../../Helper";
import { useState } from "react";

const PlaylistDetails = ({ playlist, video }) => {
  const {
    postVideoDataToPlaylistServer,
    playlistsDispatch,
    deletePlaylistDataFromServer,
    deleteVideoDataFromPlaylistServer,
  } = usePlaylist();

  const { authState } = useAuth();
  const [isChecked, setIsChecked] = useState(isPresent(playlist.videos, video));

  const handleAddVideoToPlaylist = () => {
    if (isChecked === true)
      deleteVideoDataFromPlaylistServer(
        authState?.token,
        concatedApi(playlistApi, playlist._id, video._id),
        playlistsDispatch
      );
    else if (isChecked === false)
      postVideoDataToPlaylistServer(
        authState?.token,
        concatedApi(playlistApi, playlist._id),
        video,
        playlistsDispatch
      );
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="mr-1"
        name={playlist.title}
        id={playlist._id}
        onChange={(event) => handleAddVideoToPlaylist(event, playlist)}
        checked={isChecked}
      />
      <label htmlFor={playlist._id} className="mb-0">
        {playlist.title}
      </label>
      <AiFillDelete
        className=" ml-auto pointer"
        onClick={() =>
          deletePlaylistDataFromServer(
            authState?.token,
            concatedApi(playlistApi, playlist._id),
            playlistsDispatch
          )
        }
      />
    </div>
  );
};

export default PlaylistDetails;
