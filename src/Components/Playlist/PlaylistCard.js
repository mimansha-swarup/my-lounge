import { noThumbnail } from "../../Assets";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth, usePlaylist } from "../../Context";
import { concatedApi, playlistApi } from "../../Helper/Api/Api";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  const { authState } = useAuth();
  const { playlistsDispatch,deletePlaylistDataFromServer } = usePlaylist();

  const getThumbnail = (playlist) =>
    playlist.videos[0]?.thumbnail ? playlist.videos[0]?.thumbnail : noThumbnail;
  return (
    <div className="card ">
      <AiOutlineClose
        className="btn btn-icon card-dismiss pointer"
        onClick={() =>
          deletePlaylistDataFromServer(
            authState?.token,
            concatedApi(playlistApi, playlist._id),
            playlistsDispatch
          )
        }
      />
      <Link to={`playlist/${playlist._id}`} className="underline-none">
        <div className="media-cont">
          <img
            className="card-media"
            src={getThumbnail(playlist)}
            alt={playlist.title}
          />

          <div className="overlay flex center">
            <div className="card-header">
              <p className="card-title subtitle1 bold">{playlist.title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlaylistCard;
