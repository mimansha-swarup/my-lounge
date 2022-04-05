import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { useActivities, useAuth, useLikes } from "../../Context";
import { likesApi } from "../../Helper/Api/Api";
import { Link } from "react-router-dom";
import { isPresent } from "../../Helper";

const VideoCard = ({ videoData }) => {
  const { _id, title, thumbnail, creator, creatorImage } = videoData;

  

  const { authState } = useAuth();
  const {
    activitiesState,
    activitiesDispatch,
    postUserActivityData,
    deleteUserActivityData,
  } = useActivities();
  const { likes } = activitiesState;

  const [isLiked, setIsLiked] = useState(isPresent(likes, videoData));

  const handleAddToLikedList = (
    token,
    singleVideo,
    apiPath,
    dataKey,
    activitiesDispatch
  ) => {
    if (isLiked)
      deleteUserActivityData(
        token,
        singleVideo,
        apiPath,
        dataKey,
        activitiesDispatch
      );
    else
      postUserActivityData(
        token,
        singleVideo,
        apiPath,
        dataKey,
        activitiesDispatch
      );

    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="card">
      {isLiked ? (
        <AiFillHeart
          onClick={() =>
            handleAddToLikedList(
              authState.token,
              videoData,
              likesApi,
              "likes",
              activitiesDispatch
            )
          }
          className="card-dismiss"
        />
      ) : (
        <AiOutlineHeart
          onClick={() =>
            handleAddToLikedList(
              authState.token,
              videoData,
              likesApi,
              "likes",
              activitiesDispatch
            )
          }
          className="card-dismiss"
        />
      )}
      <Link className="underline-none" to={`/video/${_id}`}>
      <div className="media-cont">
        <img className="card-media" src={thumbnail} alt={title} />
      </div>
        <div className="card-body">
          <div className="card-header">
            <div className=" mt-1 flex gap-1 align-center">
              <img
                className="avatar-sm alignself-center  avatar-bg avatar-round"
                src={creatorImage}
                alt={creator}
              />
              <div>
                <p className="card-title subtitle1 semi-bold">{title}</p>
                <span className="card-subtitle alignself-center subtitle2">
                  by {creator}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
