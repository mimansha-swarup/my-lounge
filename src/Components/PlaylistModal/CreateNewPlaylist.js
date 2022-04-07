import { useAuth, usePlaylist } from "../../Context";

const CreateNewPlaylist = () => {
  const { postPlaylistDataToServer, playlistsDispatch } = usePlaylist();
  const { authState } = useAuth();

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
    <form
      onSubmit={createNewPlaylistSubmitHandler}
      className="flex flex-column"
    >
      <div className="input-group mb-1">
        <label className="small-text" htmlFor="playlistTitle">
          Title
        </label>
        <input type="text" name="playlistTitle" id="playlistTitle" required />
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
        <button type="submit" className="btn btn-text  text-on-button ml-auto ">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateNewPlaylist;
