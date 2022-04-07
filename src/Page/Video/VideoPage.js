import { Loader, VideoCard } from "../../Components";
import { useCategories, useVideo, useFilters } from "../../Context";
import {
  filterByCategory,
  sortLatest,
  searchByName,
  isPresentByName,
} from "../../Helper";
import { filterActions } from "../../Reducer/constant";
import moment from "moment";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import "./Video.css";

const VideoPage = () => {
  const { videoList, isLoading } = useVideo();

  const { categoriesData } = useCategories();
  const { filterState, filterDispatch } = useFilters();
  const { sortBy, searchQuery, category } = filterState;

  const sortedList = sortLatest(videoList, sortBy);
  const categoryList = filterByCategory(sortedList, category);
  const renderList = searchByName(categoryList, searchQuery);

  return (
    <main className=" content">
      <div className="video-cont">
        <div className="flex space-between">
          <h3 className="headline3">
            Results{" "}
            <span className="subtitle1 grey-text">
              ({renderList.length} results)
            </span>{" "}
          </h3>
          <button
            className="btn pointer"
            onClick={() =>
              filterDispatch({
                type: filterActions.CLEAR,
              })
            }
          >
            <span className="text-on-button">Clear</span>
          </button>
        </div>

        <div className="flex gap-1 mt-1 mb-2 flex-wrap">
          {categoriesData.map((eachCategory) => (
            <div
              style={{
                color: isPresentByName(
                  filterState.category,
                  eachCategory.categoryName
                )
                  ? "#38D086"
                  : "lightgrey",
              }}
              className="btn small-text  pointer"
              key={eachCategory._id}
              onClick={() =>
                filterDispatch({
                  type: filterActions.SET_CATEGORY,
                  payload: eachCategory.categoryName,
                })
              }
            >
              {eachCategory.categoryName}
            </div>
          ))}
          <div className="ml-auto">
            <BsArrowDown
              className="mr-1 pointer"
              style={{ color: filterState.sortBy === "OLD_FIRST" && "#38D086" }}
              onClick={() =>
                filterDispatch({
                  type: filterActions.SORT,
                  payload: "OLD_FIRST",
                })
              }
            />
            <BsArrowUp
              className="pointer"
              style={{ color: filterState.sortBy === "NEW_FIRST" && "#38D086" }}
              onClick={() =>
                filterDispatch({
                  type: filterActions.SORT,
                  payload: "NEW_FIRST",
                })
              }
            />
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid-x4">
            {renderList.map((video) => (
              <VideoCard key={video._id} videoData={video} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default VideoPage;
