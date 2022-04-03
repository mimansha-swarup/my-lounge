import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";

const VideoCard = ({ videoData }) => {
  const { title, thumbnail, creator, creatorImage } = videoData;

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card">
      <div className="media-cont">
        <img
          className="card-media"
          src={
            thumbnail
          }
          alt={title}
        />
        {isLiked ? (
          <AiFillHeart className="card-dismiss" />
        ) : (
          <AiOutlineHeart className="card-dismiss" />
        )}
      </div>
      <div className="card-body">
        <div className="card-header">
          <div className=" mt-1 flex gap-1 align-center" >
          <img className="avatar-sm alignself-center  avatar-bg avatar-round" src={creatorImage} alt={creator} />
          <div >

          <p className="card-title subtitle1 semi-bold">{title}</p>
            <span className="card-subtitle alignself-center subtitle2">by {creator}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
