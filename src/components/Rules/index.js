import { RulesBtn } from "./Rules.styles";
import { useDispatch } from "react-redux";
import {open} from '../../state/slices/rulesSlice';

const Rules = () => {
  const dispatch = useDispatch();
  return ( 
    <RulesBtn onClick={() => dispatch(open())}>
      RULES
    </RulesBtn>
   );
}
 
export default Rules;