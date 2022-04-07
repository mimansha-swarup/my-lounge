import Modal from "../Modal/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useAuth, usePlaylist } from "../../Context";
import PlaylistDetails from "./PlaylistDetails";

const PlaylistModal = ({ open, onClose, video }) => {
  const [isCreate, setIsCreate] = useState(false);
  const {
    playlistsState,
    postPlaylistDataToServer,
    playlistsDispatch,
    deletePlaylistDataFromServer,
  } = usePlaylist();
  const { authState } = useAuth();

  console.log(playlistsState);

  const createNewPlaylistSubmitHandler = (event) => {
    event.preventDefault();
    const title = event.target.playlistTitle.value;
    const description = event.target.playlistDescription.value;
    postPlaylistDataToServer(
      authState?.token,
      title,
      description,
      playlistsDispatch
    );
  };

  return (
    <div className="plalist-modal">
      <Modal
        className="playlist-modal"
        open={open}
        onClose={onClose}
        headline="Save To..."
      >
        <hr className="line-horz width-100" />

        {/* Render All Playlist */}
        <div className="flex flex-column gap-1">
          {playlistsState?.playlists.length > 0 ? (
            playlistsState.playlists.map((playlist) => (
              <PlaylistDetails key={playlist._id} playlist={playlist} video={video} />
            ))
          ) : (
            <p className="subtitle1 mt-1 mb-1">No Playlists created Yet</p>
          )}
        </div>
        <hr className="line-horz" />

        {/* Create new Playlist */}

        {!isCreate && (
          <div className="flex" onClick={() => setIsCreate(true)}>
            {" "}
            <AiOutlinePlus className="alignself-center mr-1" /> create new
            playlist
          </div>
        )}
        {isCreate && (
          <form
            onSubmit={createNewPlaylistSubmitHandler}
            className="flex flex-column"
          >
            <div className="input-group mb-1">
              <label className="small-text" htmlFor="playlistTitle">
                Title
              </label>
              <input
                type="text"
                name="playlistTitle"
                id="playlistTitle"
                required
              />
            </div>
            <div className="input-group mb-1">
              <label className="small-text" htmlFor="playlistDescription">
                Description
              </label>
              <input
                type="text"
                name="playlistDescription"
                id="playlistDescription"
                required
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="btn btn-text  text-on-button ml-auto "
              >
                Create
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default PlaylistModal;
