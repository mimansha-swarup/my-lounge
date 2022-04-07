export const isPresent = (list, videos) =>
    list.filter((video) => video._id === videos._id).length > 0;

export const isPresentByName = (list, name) =>
    list.filter((eachName) => eachName === name).length > 0;