import { AuthProvider, useAuth } from "./authContext";
import { ActivitiesProvider, useActivities } from "./activitiesContext";
import { ToastProvider, useToast } from "./toastContext";
import { useVideo, VideoProvider } from "./videosContext";
import { PlayListProvider, usePlaylist } from "./playlistContext";
import { CategoriesProvider, useCategories } from "./categoryContext";
import { FilterProvider, useFilters } from "./filterContext";

export {
  useToast,
  ToastProvider,
  useAuth,
  AuthProvider,
  useActivities,
  ActivitiesProvider,
  useVideo,
  VideoProvider,
  usePlaylist,
  PlayListProvider,
  useCategories,
  CategoriesProvider,
  useFilters,
  FilterProvider,
};
