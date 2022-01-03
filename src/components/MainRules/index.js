import rulesImg from '../../images/image-rules.svg';
import iconClose from '../../images/icon-close.svg';
import { Container, Wrapper } from './MainRules.styles';
import { useDispatch } from "react-redux";
import {open} from '../../state/slices/rulesSlice';

const MainRules = () => {
  const dispatch = useDispatch();

  return ( 
    <Wrapper>
      <Container>
        <h1>RULES</h1>
        <section><img src={rulesImg} alt="The rules of the game illustrated" /></section>
        <button onClick={() => dispatch(open()) }><img src={iconClose} alt="Click to close the rules page" /></button>
      </Container>
    </Wrapper>
   );
}
 
export default MainRules;