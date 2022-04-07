import mockmanEs from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context";

import { HistoryPage, HomePage, LikedPage, LoginPage, PlayListPage, SignupPage, SingleVideoPage, VideoPage, WatchLaterPage,SinglePlaylistPage } from "../Page";
import Mockman from "mockman-js";

const AllRoutes = () => {
  const {authState}= useAuth()
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/liked-video" element={<LikedPage />} />
      <Route path="/video/:videoId" element={<SingleVideoPage />} />
      <Route path="/watch-later" element={<WatchLaterPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/playlist" element={<PlayListPage />} />
      <Route path="/playlist/:playlistId" element={<SinglePlaylistPage />} />
      
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
