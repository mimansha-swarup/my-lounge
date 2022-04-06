import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ open, onClose, children }) => {
  console.log("hello");
  return (
    <div
      className="backdrop"
      style={{ display: open ? "block" : "none" }}
      onClick={onClose}
    >
      <div className="modal">
        <div className="modal-header">
          <AiOutlineClose className="react-icons" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
