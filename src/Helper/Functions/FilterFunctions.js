import moment from "moment"
export const sortLatest = (listData, sortType) =>
  sortType === "NEW_FIRST"
    ? [...listData].sort((a, b) => moment(b.uploadedAt).unix() - moment(a.uploadedAt).unix())
    : sortType === "OLD_FIRST"
    ? [...listData].sort((a, b) => moment(a.uploadedAt).unix() - moment(b.uploadedAt).unix())
    : listData;

export const searchByName = (listData, searchQuery) =>
  listData.filter((video) => video.title.toLowerCase().includes(searchQuery));
export const filterByCategory = (listData, categories) =>
  categories.length > 0
    ? categories
        .map((eachCategory) =>
          listData.filter(
            (video) => video?.category.toLowerCase() === eachCategory.toLowerCase()
          )
        )
        .flat()
    : listData;
