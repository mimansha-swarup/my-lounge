export const isPresent = (list, videos) =>
    list.filter((video) => video._id === videos._id).length > 0;