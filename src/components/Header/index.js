import logoSvg from '../../images/logo.svg';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Container, Section1, Wrapper, Section2 } from './Header.styles';

const Header = () => {
   let {scores} = useContext(GlobalContext);

  return ( 
    <Wrapper>
      <Container>
        <Section1><img src={logoSvg} alt="The Rock, Paper, Scissors logo." /></Section1>
        <Section2>
          <p>SCORE</p>
          <h1>{scores}</h1>
        </Section2>
      </Container>
    </Wrapper>
   );
}
 
export default Header;