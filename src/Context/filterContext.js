import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filterReducer";

const filterContext   = createContext({})

export const useFilters = ()=> useContext(filterContext)

export const FilterProvider = ({children}) => {
  const [filterState,filterDispatch] = useReducer(filterReducer,{
    sortBy: null,
    searchQuery: "",
    category:[],
  })
  return <filterContext.Provider value={{filterState,filterDispatch}} >{children}</filterContext.Provider>
}