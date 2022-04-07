import "../Video/Video.css";
import { useActivities, useAuth } from "../../Context";
import { HorizontalVideoCard, NoDataExist } from "../../Components/index";
import { watchlaterApi } from "../../Helper/Api/Api";
import { Navigate } from "react-router-dom";

const WatchLaterPage = () => {
  const { activitiesState } = useActivities();
  const { authState } = useAuth();
  if (!authState?.isAuth) return <Navigate to="/login" replace />;

  return (
    <main className="content">
      <div className="video-cont">
        <h3 className="headline3">
          Saved Videos{" "}
          <span className="subtitle1 grey-text">
            ({activitiesState.watchlater.length} Videos Saved)
          </span>{" "}
        </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.watchlater.length > 0 ? (
            activitiesState.watchlater.map((video, index) => (
              <HorizontalVideoCard
                key={video._id}
                index={index + 1}
                videoData={video}
                dataKey={"watchlater"}
                api={watchlaterApi}
              />
            ))
          ) : (
            <NoDataExist message={"You haven't saved any videos"} />
          )}
        </div>
      </div>
    </main>
  );
};

export default WatchLaterPage;
