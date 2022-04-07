
import { Link } from "react-router-dom";

import "./ErrorPage.css";

const Error404Page = () => {
  return (
  
    <main className="content">
      <div className="error-body">

      <h1 className="headline1 text-center mb-0 mt-2 bold ">Oops!!! You Found Me</h1>
      <h3 className="headline3 text-center mb-0 ">You have came too far</h3>
      <div className="flex flex-column center">
        <Link to="/">
          <button className="btn btn-contained purple mt-2 mb-1">Go Back</button>
        </Link>
      <img src="https://raw.githubusercontent.com/mimansha-swarup/mystery-shack-ecommerce/dev/src/assets/404.svg" className="width-50" alt="eror404image" />
      </div>
      </div>
    </main>
   
  );
};

export default Error404Page;