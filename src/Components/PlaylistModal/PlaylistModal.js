import Modal from "../Modal/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const PlaylistModal = ({ open, onClose }) => {
  const [isCreate, setIsCreate] = useState(false);
  return (
    <div className="plalist-modal">
      <Modal
        className="playlist-modal"
        open={open}
        onClose={onClose}
        headline="Save To..."
      >
        <hr className="line-horz width-100" />
        <div className="flex">
          <input
            type="checkbox"
            className="mr-1"
            name="watch later"
            id="Watch later"
          />
          <label htmlFor="Watch later">Watch later</label>
        </div>
        <hr className="line-horz" />
        {!isCreate && (
          <div className="flex" onClick={() => setIsCreate(true)}>
            {" "}
            <AiOutlinePlus className="alignself-center mr-1" /> create new
            playlist
          </div>
        )}
        {isCreate && (
          <form className="flex flex-column">
            <div className="input-group mb-1">
              <label className="small-text" htmlFor="playlistTitle">Title</label>
              <input type="text" name="playlistTitle" id="playlistTitle" />
            </div>
            <div className="input-group mb-1">
              <label className="small-text" htmlFor="playlistDescription">Description</label>
              <input
                type="text"
                name="playlistDescription"
                id="playlistDescription"

              />
            </div>
            <div className="flex">
              <button className="btn btn-text  text-on-button ml-auto ">
                Create
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default PlaylistModal;
