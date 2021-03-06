import { useToast } from "../../Context";
import Toast from "./Toast";
import "./toast.css"
const ToastContainer = () => {
  const {toastData} = useToast()
  return ( 
    <div className="toast-cont">
      {
        toastData.map((data,i)=><Toast key={i} type={data.type} message={data.message} />)
      }
    </div>
   );
}
 
export default ToastContainer;