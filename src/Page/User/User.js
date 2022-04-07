import "./User.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";
import { secondaryLabels } from "../../Helper";
const UserPage = () => {
  const { authState } = useAuth();

  return (
    <main className="content">
      <div className="user-cont">

      {authState?.isAuth ? (
        <div className="flex flex-column center">
          <FaUserCircle className="avatar-lg " />
          <p className="subtitle1">Hey, {authState?.name || "User"}</p>
          <div className="width-50 flex flex-column gap-1 mt-3">
            {secondaryLabels.map((currLabel,i) => (
              <Link key={i} to={currLabel.path} className="underline-none" >
                <div className="card ">
                  <div className="flex align-center ">
                    {currLabel.icon}
                    <p className="body1">{currLabel.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-column center">
          <h4 className="headline4">Kindly Login</h4>
          <Link to="/login">
            <button className="btn btn-contained ml-2 semibold">Login</button>
          </Link>
        </div>
      )}
      </div>
    </main>
  );
};

export default UserPage;
