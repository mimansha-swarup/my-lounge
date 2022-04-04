import "../Video/Video.css"
import { useActivities, useLikes } from "../../Context";
import {VideoCard} from "../../Components/index"

const LikedPage = () => {
  const {activitiesState} = useActivities()

  return ( 
    <main className="content">
    
      <div className="video-cont">
      <h3 className="headline3">Liked Videos <span className="subtitle1 grey-text">({activitiesState.likes.length} Liked Videos)</span> </h3>
        <div className="grid-x4">
          {activitiesState.likes.map((video) => (
            <VideoCard key={video._id} videoData={video} />
          ))}
        </div>
      </div>
      
    </main>
   );
}
 
export default LikedPage;