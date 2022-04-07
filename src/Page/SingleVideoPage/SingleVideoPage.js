import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RiMenuAddLine, RiThumbUpLine, RiTimeLine } from "react-icons/ri";
import { PlaylistModal, SuggestionCard } from "../../Components";
import { useActivities, useAuth, useVideo } from "../../Context";
import "./SingleVideoPage.css";
import { isPresent, randomUniqueNum } from "../../Helper";
import { historyApi, likesApi, watchlaterApi } from "../../Helper/Api/Api";

const SingleVideoPage = () => {
  const [currVideo, setCurrVideo] = useState({});
  const [open, setOpen] = useState(false);
  const { videoId } = useParams();
  const { videoList } = useVideo();
  const { authState } = useAuth();
  
  const {
    activitiesState,
    activitiesDispatch,
    postUserActivityData,
    deleteUserActivityData,
  } = useActivities();

  const [statusActivity, setStatusActivity] = useState({
    likes: false,
    watchlater: false,
    history: false,
  });
  const [randomArray, setRandomArray] = useState([...Array(7)]);

  const findVideoData = () =>
    videoList.filter((video) => video._id === videoId)[0];



  useEffect(() => {
    setCurrVideo(findVideoData());
    setStatusActivity((prevStatusActivity) => ({
      ...prevStatusActivity,
      likes: isPresent(activitiesState.likes, findVideoData()),
      watchlater: isPresent(activitiesState.watchlater, findVideoData()),
    }));

    setRandomArray(randomUniqueNum(videoList.length,7));

    //  History
    if (!isPresent(activitiesState.history, findVideoData())) {
      postUserActivityData(
        authState.token,
        findVideoData(),
        historyApi,
        "history",
        activitiesDispatch
      );
    }
  }, [videoId]);

  const handleActions = (
    token,
    singleVideo,
    apiPath,
    dataKey,
    activitiesDispatch
  ) => {
    if (statusActivity[dataKey])
      deleteUserActivityData(
        token,
        singleVideo,
        apiPath,
        dataKey,
        activitiesDispatch
      );
    else
      postUserActivityData(
        token,
        singleVideo,
        apiPath,
        dataKey,
        activitiesDispatch
      );

    setStatusActivity((prevStatusActivity) => ({
      ...prevStatusActivity,
      [dataKey]: !prevStatusActivity[dataKey],
    }));
  };

  if (!authState?.isAuth) return <Navigate to="/login" replace />;
  return (
    <main className="single-content">
      <div className="box">
        <div className="main-area">
          <img
            src={currVideo.thumbnail}
            alt={currVideo.title}
            className="img-responsive"
          />

          <h4 className="headline4 mb-0">{currVideo.title}</h4>

          <div className="flex mb-1">
            <div className="actions flex gap-1">
              <div
                className={
                  statusActivity.likes
                    ? "flex center pointer-cursor text-green-00"
                    : "flex center pointer-cursor"
                }
                onClick={() =>
                  handleActions(
                    authState.token,
                    currVideo,
                    likesApi,
                    "likes",
                    activitiesDispatch
                  )
                }
              >
                <RiThumbUpLine className="react-icons" />
                <span
                  style={{ color: "inherit" }}
                  className="subtitle2 semibold mb-0"
                >
                  Like
                </span>
              </div>

              <div
                className={
                  statusActivity.watchlater
                    ? "flex center pointer-cursor text-green-00"
                    : "flex center pointer-cursor"
                }
                onClick={() =>
                  handleActions(
                    authState.token,
                    currVideo,
                    watchlaterApi,
                    "watchlater",
                    activitiesDispatch
                  )
                }
              >
                <RiTimeLine className="react-icons" />
                <span
                  style={{ color: "inherit" }}
                  className="subtitle2 semibold mb-0"
                >
                  Watch Later
                </span>
              </div>

              <div 
              className="flex center pointer-cursor"
              onClick={()=>setOpen(true)}
              >
                <RiMenuAddLine className="react-icons" />
                <span
                  style={{ color: "inherit" }}
                  className="subtitle2 semibold mb-0"
                >
                  Playlist
                </span>
              </div>
              {
                open &&   <PlaylistModal open={open} video={currVideo} onClose={()=>setOpen(false)} />
              }
            </div>
          </div>

          <hr className="line-horz" />

          <div className=" mt-1 flex gap-1 align-center">
            <img
              className="avatar-sm alignself-center  avatar-bg avatar-round"
              src={currVideo.creatorImage}
              alt={currVideo.creator}
            />

            <div className="flex center">
              <span className="card-subtitle alignself-center subtitle2">
                by {currVideo.creator}
              </span>
            </div>
          </div>

          <p className="body2 mb-2">{currVideo.description}</p>
          <hr className="line-horz" />
        </div>

        <div className="suggestion-area">
          {randomArray.map((randIndex, i) => (
            <SuggestionCard key={i} videoData={videoList[randIndex-1]} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SingleVideoPage;
