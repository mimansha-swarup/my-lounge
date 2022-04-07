import { Loader, VideoCard } from "../../Components";
import { useVideo } from "../../Context";

import "./Video.css";

const VideoPage = () => {
  const { videoList, isLoading } = useVideo();

  return (
    <main className=" content">
      <div className="video-cont">
        <h3 className="headline3">
          Results{" "}
          <span className="subtitle1 grey-text">
            ({videoList.length} results)
          </span>{" "}
        </h3>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid-x4">{
            videoList.map((video) => (
              <VideoCard key={video._id} videoData={video} />
            ))}
        </div>
          )}
      </div>
    </main>
  );
};

export default VideoPage;
