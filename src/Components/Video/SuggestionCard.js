import "./SuggestionCard.css"
import { Link } from "react-router-dom";
const SuggestionCard = ({ videoData={} }) => {
  const { _id,title, thumbnail, creator } = videoData;
  return (
    <Link className="underline-none" to={`/video/${_id}`} >

    <div className="card  card-horz">
      <div className="flex">
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
    </div>
    </Link>
  );
};

export default SuggestionCard;
