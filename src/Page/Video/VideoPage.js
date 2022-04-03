import { Navigate } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../Components";
import { useAuth } from "../../Context";

import "./Video.css";

const VideoPage = () => {
  const {authState} = useAuth()
  if(!authState?.isAuth) return <Navigate to="/login" replace />
  return (
    <main className=" content">
      <div className="video-cont">
        <h3 className="headline3">Results <span className="subtitle1 grey-text">(46 results)</span> </h3>
        <div className="grid-x4">
          {videos.map((video) => (
            <VideoCard key={video._id} videoData={video} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
