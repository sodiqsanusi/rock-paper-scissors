import rulesImg from '../../images/image-rules.svg';
import iconClose from '../../images/icon-close.svg';
import { Container, Wrapper } from './MainRules.styles';
import { useContext } from "react";
import {GlobalContext} from '../../GlobalContext';

const MainRules = () => {
  const {makeRulesOpen} = useContext(GlobalContext);

  return ( 
    <Wrapper>
      <Container>
        <h1>RULES</h1>
        <section><img src={rulesImg} alt="The rules of the game illustrated" /></section>
        <button onClick={() => makeRulesOpen(false) }><img src={iconClose} alt="Click to close the rules page" /></button>
      </Container>
    </Wrapper>
   );
}
 
export default MainRules;