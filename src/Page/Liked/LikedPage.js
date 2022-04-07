import "../Video/Video.css";
import { useActivities } from "../../Context";
import { HorizontalVideoCard, NoDataExist } from "../../Components/index";
import { likesApi } from "../../Helper/Api/Api";

const LikedPage = () => {
  const { activitiesState } = useActivities();
  
  return (
    <main className="content">
      <div className="video-cont">
        <h3 className="headline3">
          Liked Videos{" "}
          <span className="subtitle1 grey-text">
            ({activitiesState.likes.length} Liked Videos)
          </span>{" "}
        </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.likes.length > 0 ? (
            activitiesState.likes.map((video, index) => (
              <HorizontalVideoCard
                key={video._id}
                index={index + 1}
                videoData={video}
                dataKey={"likes"}
                api={likesApi}
              />
            ))
          ) : (
            <NoDataExist message={"You haven't Liked Any Videos yet"} />
          )}
        </div>
      </div>
    </main>
  );
};

export default LikedPage;
