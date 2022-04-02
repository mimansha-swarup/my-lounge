import { banner } from "../../Assets";

import "../../Page/Home/HomePage.css";


const Hero = () => {
  

  return (
    <div className="hero mt-3 mb-3">
     

      <img
        className="img-responsive"
        src={banner}
        alt="HeroImage"
      />
    </div>
  );
};

export default Hero;