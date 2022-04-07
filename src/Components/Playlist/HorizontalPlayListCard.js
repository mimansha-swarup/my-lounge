import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useActivities, useAuth, usePlaylist } from "../../Context";
import "../Video/SuggestionCard.css";
import { concatedApi, playlistApi } from "../../Helper/Api/Api";

const HorizontalPlaylistCard = ({ video, index, playlist }) => {
  const { _id, title, thumbnail, creator } = video;

  const { authState } = useAuth();
  const { deleteVideoDataFromPlaylistServer,playlistsDispatch } = usePlaylist();

  return (
    <div className="card  card-horz horz-video ">
      <MdOutlineCancel
        onClick={() =>
          deleteVideoDataFromPlaylistServer(
            authState?.token,
            concatedApi(playlistApi, playlist._id,_id),
            playlistsDispatch
          )
        }
        className="card-dismiss pointer"
      />

      <Link className="underline-none" to={`/video/${_id}`}>
        <div className="flex align-center">
          <span className="subtitle2 bold alignself-center">{index}</span>

          <div className="media-cont">
            <img className="card-media" src={thumbnail} alt={title} />
          </div>

          <div className="card-body space-between">
            <div className="card-header">
              <p className="card-title subtitle1 bold">{title}</p>

              <p className="card-subtitle subtitle1">{creator}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalPlaylistCard;
