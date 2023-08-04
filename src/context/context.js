import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { forumData } from "../data";





const initialValue = {
   data: forumData,
   filteredData: forumData,  
   singlePostCurrent: null  
}



export const DataContext = createContext(initialValue);

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);

   
 

      

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )   
}