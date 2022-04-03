import { Routes, Route } from "react-router-dom";

import { HomePage, VideoPage } from "../Page";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="video" element={<VideoPage />} />
    </Routes>
  );
};

export default AllRoutes;
