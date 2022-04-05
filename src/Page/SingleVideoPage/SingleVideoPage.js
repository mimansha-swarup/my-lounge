import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiMenuAddLine, RiThumbUpLine, RiTimeLine } from "react-icons/ri";
import { SuggestionCard } from "../../Components";
import { useVideo } from "../../Context";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { videoList } = useVideo();
  const [currVideo, setCurrVideo] = useState({});

  useEffect(() => {
    setCurrVideo(videoList.filter((video) => video._id === videoId)[0]);
  }, [videoId]);
  const getRandomInt = (num) => Math.floor(Math.random() * num);
  const randomArray = [...Array(7)].map((num) =>
    getRandomInt(videoList.length)
  );

  console.log(randomArray);

  return (
    <main className="single-content">
      {console.log("currVideo", currVideo)}
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
              <div className="flex center pointer-cursor">
                <RiThumbUpLine className="react-icons" />
                <span className="subtitle2 semibold">Like</span>
              </div>

              <div className="flex center pointer-cursor">
                <RiTimeLine className="react-icons" />
                <span className="subtitle2 semibold">Watch Later</span>
              </div>

              <div className="flex center pointer-cursor">
                <RiMenuAddLine className="react-icons" />
                <span className="subtitle2 semibold">Playlist</span>
              </div>
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
            <SuggestionCard key={i} videoData={videoList[randIndex]} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SingleVideoPage;
