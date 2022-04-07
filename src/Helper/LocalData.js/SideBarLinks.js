import {
  RiHome2Line,
  RiThumbUpLine,
  RiTimeLine,
  RiVideoLine,
  RiMenuUnfoldFill,
  RiHistoryLine,
  RiUser3Line,
} from "react-icons/ri";
export const labels = [
  {
    label: "User",
    icon: <RiUser3Line className="sidebar-icons mr-2" />,
    path: "/user",
  },
  {
    label: "Home",
    icon: <RiHome2Line className="sidebar-icons mr-2" />,
    path: "/home",
  },
  {
    label: "Videos",
    icon: <RiVideoLine className="sidebar-icons mr-2" />,
    path: "/video",
  },
  {
    label: "Liked",
    icon: <RiThumbUpLine className="sidebar-icons mr-2" />,
    path: "/liked-video",
  },
];

export const secondaryLabels =[
  {
    label: "Watch Later",
    icon: <RiTimeLine className="sidebar-icons mr-2" />,
    path: "/watch-later",
  },
  {
    label: "Playlist",
    icon: <RiMenuUnfoldFill className="sidebar-icons mr-2" />,
    path: "/playlist",
  },
  {
    label: "History",
    icon: <RiHistoryLine className="sidebar-icons mr-2" />,
    path: "/history",
  },

]