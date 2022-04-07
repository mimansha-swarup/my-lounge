import Modal from "../Modal/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useAuth, usePlaylist } from "../../Context";
import PlaylistDetails from "./PlaylistDetails";
import CreateNewPlaylist from "./CreateNewPlaylist";

const PlaylistModal = ({ open, onClose, video }) => {
  const [isCreate, setIsCreate] = useState(false);
  const {
    playlistsState
  } = usePlaylist();
  
  return (
    <div className="plalist-modal">
      <Modal
        className="playlist-modal"
        open={open}
        onClose={onClose}
        headline="Save To..."
      >
        <hr className="line-horz width-100" />

        {/* Render All Playlist */}
        <div className="flex flex-column gap-1">
          {playlistsState?.playlists.length > 0 ? (
            playlistsState.playlists.map((playlist) => (
              <PlaylistDetails key={playlist._id} playlist={playlist} video={video} />
            ))
          ) : (
            <p className="subtitle1 mt-1 mb-1">No Playlists created Yet</p>
          )}
        </div>
        <hr className="line-horz" />

        {/* Create new Playlist */}

        {!isCreate && (
          <div className="flex" onClick={() => setIsCreate(true)}>
            {" "}
            <AiOutlinePlus className="alignself-center mr-1" /> create new
            playlist
          </div>
        )}
        {isCreate && (
          <CreateNewPlaylist />
          
        )}
      </Modal>
    </div>
  );
};

export default PlaylistModal;
