import { Link } from "react-router-dom";
import { useFilters } from "../../Context";
import { filterActions } from "../../Reducer/constant";

const CategoryCard = ({ category }) => {
  const { categoryImage, categoryName } = category;
  const { filterDispatch } = useFilters();
  
  return (
    <Link
      to="/video"
      onClick={() =>
        filterDispatch({
          type: filterActions.SET_CATEGORY,
          payload: categoryName,
        })
      }
    >
      <div className="category-card card">
        <div className="media-cont">
          <img
            src={categoryImage}
            alt={categoryName}
            className="card-media img-round"
          />
        </div>
        <div className="card-header">
          <h4 className="headline4 text-center underline-none">
            {categoryName}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
