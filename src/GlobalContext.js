import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  var [isRulesOpen, makeRulesOpen] = useState(false);
  var [scores, setScores] = useState(0);
  return ( 
      <GlobalContext.Provider value={{isRulesOpen, makeRulesOpen, scores, setScores}}>
        {props.children}
      </GlobalContext.Provider>
   );
}