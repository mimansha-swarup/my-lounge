import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { toastType } from "../../Helper/toast/toastType";
const Toast = ({ type, message }) => {

  const [dispay, setDisplay] = useState("flex");
 
  useEffect(()=>{
    setTimeout(()=>deleteToast(),5000)
  })

  const deleteToast = () => {
    setDisplay("none");
  };

  return (
    <div
      style={{ ...toastType[type], display: dispay }}
      className="toast"
    >
      <p className="subtitle2">
        {message}
      </p>
      <div className="toast-action">
        <MdCancel onClick={deleteToast} className="react-icons" />
      </div>
    </div>
  );
};

export default Toast;
