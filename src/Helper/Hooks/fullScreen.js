import { useLocation } from "react-router-dom"

export const useIsFullScreen =(path) =>{
const location = useLocation()
return location.pathname.includes(path)
}