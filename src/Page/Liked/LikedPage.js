import "../Video/Video.css"
import { useActivities, useAuth, useLikes } from "../../Context";
import {HorizontalVideoCard, VideoCard} from "../../Components/index"
import { likesApi } from "../../Helper/Api/Api";
import { Navigate } from "react-router-dom";

const LikedPage = () => {
  const {activitiesState} = useActivities()
  const { authState } = useAuth();
  if (!authState?.isAuth) return <Navigate to="/login" replace />;

  return ( 
    <main className="content">
    
      <div className="video-cont">
      <h3 className="headline3">Liked Videos <span className="subtitle1 grey-text">({activitiesState.likes.length} Liked Videos)</span> </h3>
        <div className="flex flex-column center gap-1">
          {activitiesState.likes.map((video,index) => (
            <HorizontalVideoCard key={video._id} index={index+1} videoData={video} dataKey={"likes"} api={likesApi} />
          ))}
        </div>
       
      </div>
      
    </main>
   );
}
 
export default LikedPage;