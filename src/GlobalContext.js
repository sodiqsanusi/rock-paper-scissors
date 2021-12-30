import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  var [isRulesOpen, makeRulesOpen] = useState(true);
  return ( 
      <GlobalContext.Provider value={{isRulesOpen, makeRulesOpen}}>
        {props.children}
      </GlobalContext.Provider>
   );
}