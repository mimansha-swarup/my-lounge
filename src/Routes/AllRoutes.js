import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context";

import { HomePage, LikedPage, LoginPage, SignupPage, VideoPage } from "../Page";

const AllRoutes = () => {
  const {authState}= useAuth()
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/liked-video" element={<LikedPage />} />
      
      {
        authState?.isAuth ?(
          <>
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<Navigate to="/" replace />} />
          </>
        ):(
          <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
          </>
        )

      }
    </Routes>
  );
};

export default AllRoutes;
