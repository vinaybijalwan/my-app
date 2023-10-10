


import React, { createContext, useContext } from "react";
import UseContext_02 from "./UseContext_02";


const Context = createContext();

const UseContext_01 = () => {
   
   

  return (
    <Context.Provider value={{ data: "" }}>
      <UseContext_02 />
      
    </Context.Provider>
  )
}

export default UseContext_01