import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../Components";

import "./Video.css";

const VideoPage = () => {
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
