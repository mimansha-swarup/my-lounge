import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context";

export function RequiresAuth({ children }) {
  const { authState } = useAuth();
  const location = useLocation();
  
  return authState?.isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
