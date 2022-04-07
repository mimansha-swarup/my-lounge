import "./PlayList.css";
import { usePlaylist } from "../../Context";

import { CreateNewPlaylist, PlaylistCard } from "../../Components";

const PlayListPage = () => {
  const { playlistsState } = usePlaylist();
  console.log(playlistsState);

 

  return (
    <main className="content">
      <div className="playlist-cont">
        <h3 className="headline3">
          Your Playlists{" "}
          <span className="subtitle1 grey-text">
            ({playlistsState?.playlists.length} Playlists Created)
          </span>{" "}
        </h3>
        {playlistsState?.playlists.length > 0 ? (
          <div className="grid-x4">
            {playlistsState?.playlists.map((playlist) => (
              <PlaylistCard key={playlist._id} playlist={playlist} />
            ))}
          </div>
        ) : (
          <div className="flex flex-column mt-3 center mx-auto ">
            <div className="card padding-2">

            <h4 className="headline4 mt-1">Create New Playlist</h4>
            <CreateNewPlaylist />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PlayListPage;
