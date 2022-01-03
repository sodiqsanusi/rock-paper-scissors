import logoSvg from '../../images/logo.svg';
import { Container, Section1, Wrapper, Section2 } from './Header.styles';
import {useSelector} from 'react-redux';

const Header = () => {
  const count = useSelector(state => state.scores.value);
  

  return ( 
    <Wrapper>
      <Container>
        <Section1><img src={logoSvg} alt="The Rock, Paper, Scissors logo." /></Section1>
        <Section2>
          <p>SCORE</p>
          <h1>{count}</h1>
        </Section2>
      </Container>
    </Wrapper>
   );
}
 
export default Header;