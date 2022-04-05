import "../Video/Video.css"
import { useActivities } from "../../Context";
import {HorizontalVideoCard} from "../../Components/index"
import { watchlaterApi } from "../../Helper/Api/Api";

const WatchLaterPage = () => {
  const {activitiesState} = useActivities()

  return ( 
    <main className="content">
    
      <div className="video-cont">
      <h3 className="headline3">Saved Videos <span className="subtitle1 grey-text">({activitiesState.watchlater.length} Videos Saved)</span> </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.watchlater.map((video,index) => (
            <HorizontalVideoCard key={video._id} index={index+1} videoData={video} dataKey={"watchlater"} api={watchlaterApi} />
          ))}
        </div>
       
      </div>
      
    </main>
   );
}
 
export default WatchLaterPage;