export const categoriesApi = "/api/categories";
export const videosApi = "/api/videos";
export const signupPostApi = "/api/auth/signup";
export const loginPostApi = "/api/auth/login";
export const likesApi = "/api/user/likes";
export const watchlaterApi = "/api/user/watchlater";
export const historyApi = "/api/user/history";


export const concatedApi = (api,id) => api+"/"+String(id);