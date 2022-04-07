import "../Video/Video.css";
import { useAuth, usePlaylist } from "../../Context";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HorizontalPlaylistCard, NoDataExist } from "../../Components/index";


const SinglePlaylistPage = () => {
  const { playlistId } = useParams();
  
  const [currPlaylist, setCurrPlaylist] = useState({ videos: [] });
  const { playlistsState } = usePlaylist();
  const { playlists } = playlistsState;
  const { authState } = useAuth();

  const findPlayist = () =>
    playlists.filter((playlist) => playlist._id === playlistId)[0];

  useEffect(() => {
    setCurrPlaylist(findPlayist());
  }, [playlistId,playlists]);

  return (
    <main className="content">
      <div className="video-cont">
        <h3 className="headline3">
          {" "}
          {currPlaylist.title}{" "}
          <span className="subtitle1 grey-text">
            ({currPlaylist?.videos.length} Videos)
   
          </span>{" "}
        </h3>
    
        <div className="flex flex-column center gap-1">
          {currPlaylist?.videos.length>0 ?currPlaylist?.videos.map((video, index) => (
            <HorizontalPlaylistCard
            playlist={currPlaylist}
              key={video._id}
              index={index + 1}
              video={video}
            />
          )):(
           <NoDataExist message={"No songs in Playlist"} />
          )}
        </div>
      </div>
    </main>
  );
};

export default SinglePlaylistPage;
