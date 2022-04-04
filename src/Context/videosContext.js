import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { videosApi } from "../Helper/Api/Api";
import { useToast } from "./toastContext";

const videoContext = createContext("hello");

export const useVideo = () => useContext(videoContext);

export const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setToastData } = useToast();
  useEffect(() => {

    (async () => {
    
      try {
        setIsLoading(true)
        const response = await axios.get(videosApi);
  
    
        if (response.status === 200) {
          setVideoList(response.data.videos);
        }
        setIsLoading(false)  

    
      } catch (error) {
    
        console.log(error);
        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "error", message: error.message },
        ]);

      }
    })();
  }, []);

  return <videoContext.Provider value={{videoList,isLoading}} >{children}</videoContext.Provider>;
};
