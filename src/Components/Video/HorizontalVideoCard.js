import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useActivities ,useAuth} from "../../Context";
import "./SuggestionCard.css";


const HorizontalVideoCard = ({ videoData, index, dataKey, api }) => {
  const { _id, title, thumbnail, creator } = videoData;

  const {
    activitiesDispatch,
    deleteUserActivityData,
  } = useActivities();
  const {authState} = useAuth()

  const removeFromLikedList = (
    token,
    singleVideo,
    apiPath,
    dataKey,
    activitiesDispatch
  ) =>
    deleteUserActivityData(
      token,
      singleVideo,
      apiPath,
      dataKey,
      activitiesDispatch
    );

  return (
    <div className="card  card-horz horz-video ">
      <MdOutlineCancel
        onClick={() =>
          removeFromLikedList(
            authState.token,
            videoData,
            api,
            dataKey,
            activitiesDispatch
          )
        }
        className="card-dismiss"
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

export default HorizontalVideoCard;
