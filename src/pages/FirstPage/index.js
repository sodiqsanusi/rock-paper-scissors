import GameButton from "../../components/GameButton";
import scissorsImg from '../../images/icon-scissors.svg';
import rockImg from '../../images/icon-rock.svg';
import paperImg from '../../images/icon-paper.svg';
import { Div1, Div2, Wrapper } from "./FirstPageStyled";

const FirstPage = () => {
  return ( 
    <Wrapper>
      <Div1>
        <GameButton image={paperImg} lightColor='hsl(230, 89%, 65%)' darkColor='hsl(230, 89%, 62%)' type='paper'/>
        <GameButton image={scissorsImg} lightColor='hsl(40, 84%, 53%)' darkColor='hsl(40, 84%, 49%)' type='scissors'/>
      </Div1>
      <Div2>
       <GameButton image={rockImg} lightColor='hsl(349, 70%, 56%)' darkColor='hsl(349, 70%, 52%)' type='rock'/>
      </Div2>
    </Wrapper>
   );
}
 
export default FirstPage;