import "../Video/Video.css";
import { useActivities, useAuth } from "../../Context";
import { HorizontalVideoCard } from "../../Components/index";
import { historyApi } from "../../Helper/Api/Api";
import { Navigate } from "react-router-dom";

const HistoryPage = () => {
  const { activitiesState } = useActivities();

  const { authState } = useAuth();
  if (!authState?.isAuth) return <Navigate to="/login" replace />;

  return (
    <main className="content">
      <div className="video-cont">
        <h3 className="headline3">Watch History </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.history.map((video, index) => (
            <HorizontalVideoCard
              key={video._id}
              index={index + 1}
              videoData={video}
              dataKey={"history"}
              api={historyApi}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HistoryPage;
