import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
import { categoriesApi } from "../Helper/Api/Api";
import { useToast } from "./toastContext";


const categoriesContext = createContext([]);

export const useCategories = () => useContext(categoriesContext);



export const CategoriesProvider = ({ children }) => {

  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState( false);
  const {setToastData} = useToast

  useEffect(() => {
    (async () => {
      setIsLoading( true);
      const response = await axios.get(categoriesApi);
      if (response.status === 200) {
        setCategoriesData(response.data.categories);
        setIsLoading( false);
      }
      try {
      } catch (error) {
        setToastData((prevToastData) => [
          ...prevToastData,
          { type: "error", message: error.message },
        ]);
      }
    })();
  }, []);
  return (
    <categoriesContext.Provider value={{ categoriesData, isLoading }}>
      {children}
    </categoriesContext.Provider>
  );
};
