import { Link } from "react-router-dom";
import { noData } from "../../Assets";

const NoDataExist = ({ message }) => {
  
  return (
    <div className="flex flex-column center mx-auto mt-1">
      <img src={noData} alt="noData" className="width-50" />
      <h4 className="headline4 text-center">{message}</h4>
      <Link to="/video" className="underline-none">
        <button className="btn btn-contained green">Browse Videos</button>
      </Link>
    </div>
  );
};

export default NoDataExist;
