
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context";

import { HistoryPage, HomePage, LikedPage, LoginPage, PlayListPage, SignupPage, SingleVideoPage, VideoPage, WatchLaterPage,SinglePlaylistPage, Error404Page } from "../Page";

import { RequiresAuth } from "./RequiresAuth";

const AllRoutes = () => {
  const {authState}= useAuth()
  const location = useLocation()

  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/video" element={<RequiresAuth><VideoPage /></RequiresAuth>} />
      <Route path="/liked-video" element={<RequiresAuth><LikedPage /></RequiresAuth>} />
      <Route path="/video/:videoId" element={<RequiresAuth> <SingleVideoPage /> </RequiresAuth>} />
      <Route path="/watch-later" element={<RequiresAuth> <WatchLaterPage /> </RequiresAuth>} />
      <Route path="/history" element={<RequiresAuth> <HistoryPage /> </RequiresAuth>} />
      <Route path="/playlist" element={<RequiresAuth> <PlayListPage /> </RequiresAuth>} />
      <Route path="/playlist/:playlistId" element={<RequiresAuth> <SinglePlaylistPage /> </RequiresAuth>} />
      <Route path="*" element={<Error404Page />} />
     
      {
        authState?.isAuth ?(
          <>
        <Route path="/login" element={<Navigate to={location.state?.from?.pathname || "/" } replace />} />
        <Route path="/signup" element={<Navigate to={location.state?.from?.pathname || "/" } replace />} />
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
