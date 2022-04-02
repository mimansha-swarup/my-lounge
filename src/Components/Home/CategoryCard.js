import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
  const { categoryImage, categoryName } = category;

  return (
    <Link to="/video"  >
      <div className="category-card card">
        <div className="media-cont">
          <img
            src={categoryImage}
            alt={categoryName}
            className="card-media img-round"
          />
        </div>
        <div className="card-header">
          <h4 className="headline4 text-center underline-none">{categoryName}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
