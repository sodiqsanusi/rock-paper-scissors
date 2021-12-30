import { RulesBtn } from "./Rules.styles";
import { useContext } from "react";
import {GlobalContext} from '../../GlobalContext';

const Rules = () => {
  const {makeRulesOpen} = useContext(GlobalContext);
  return ( 
    <RulesBtn onClick={() => makeRulesOpen(true)}>
      RULES
    </RulesBtn>
   );
}
 
export default Rules;