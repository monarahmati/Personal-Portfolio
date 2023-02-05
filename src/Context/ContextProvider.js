import React, { createContext } from "react";
import AllBlogData from "../Hooks/AllBlogData";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const value = AllBlogData();
<<<<<<< HEAD
  return <MyContext.Provider value={value}> 
              {children} 
         </MyContext.Provider>;
=======
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
>>>>>>> 2a062616b390becf1a16fcf6d2f4990bdee00bb4
};

export default ContextProvider;
