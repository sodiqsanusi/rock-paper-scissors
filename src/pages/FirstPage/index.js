import GameButton from "../../components/GameButton";
import scissorsImg from '../../images/icon-scissors.svg';
import rockImg from '../../images/icon-rock.svg';
import paperImg from '../../images/icon-paper.svg';
import { Wrapper } from "./FirstPageStyled";

const FirstPage = () => {
  return ( 
    <Wrapper>
      <GameButton image={paperImg} lightColor='hsl(230, 89%, 65%)' darkColor='hsl(230, 89%, 62%)' type='rock'/>
      <GameButton image={scissorsImg} lightColor='hsl(40, 84%, 53%)' darkColor='hsl(40, 84%, 49%)' type='scissors'/>
      <GameButton image={rockImg} lightColor='hsl(349, 70%, 56%)' darkColor='hsl(349, 70%, 52%)' type='rock'/>
    </Wrapper>
   );
}
 
export default FirstPage;