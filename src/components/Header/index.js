import logoSvg from '../../images/logo.svg';
import { Container, Section1, Wrapper, Section2 } from './Header.styles';

const Header = () => {

  return ( 
    <Wrapper>
      <Container>
        <Section1><img src={logoSvg} alt="The Rock, Paper, Scissors logo." /></Section1>
        <Section2>
          <p>SCORE</p>
          <h1>13</h1>
        </Section2>
      </Container>
    </Wrapper>
   );
}
 
export default Header;