import "../Video/Video.css";
import { useActivities } from "../../Context";
import { HorizontalVideoCard, NoDataExist } from "../../Components/index";
import { historyApi } from "../../Helper/Api/Api";


const HistoryPage = () => {
  const { activitiesState } = useActivities();
  
  return (
    <main className="content">
      <div className="video-cont">
        <h3 className="headline3">Watch History </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.history.length > 0 ? (
            activitiesState.history.map((video, index) => (
              <HorizontalVideoCard
                key={video._id}
                index={index + 1}
                videoData={video}
                dataKey={"history"}
                api={historyApi}
              />
            ))
          ) : (
            <NoDataExist message={"you haven't watched any videos"} />
          )}
        </div>
      </div>
    </main>
  );
};

export default HistoryPage;
