import "../Video/Video.css";
import { useActivities, useAuth } from "../../Context";
import { HorizontalVideoCard, NoDataExist } from "../../Components/index";
import { historyApi } from "../../Helper/Api/Api";


const HistoryPage = () => {
  const {
    activitiesState,
    activitiesDispatch,
    deleteUserActivityData,
  } = useActivities();
  const{authState} = useAuth()
  const clearHistory =(token,singleVideo,apiPath,dataKey,activitiesDispatch) =>{
    if(activitiesState.history.length > 0 ){
      deleteUserActivityData(
        token,
        singleVideo,
        apiPath,
        dataKey,
        activitiesDispatch
      )
    }
  }
  
  return (
    <main className="content">
      <div className="video-cont">
        <div className="flex space-between">

        <h3 className="headline3">Watch History </h3>
        <button className="btn" onClick={()=>clearHistory(authState?.token,{_id:"all"},historyApi,"history",activitiesDispatch)} >Clear All</button>
        </div>
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
