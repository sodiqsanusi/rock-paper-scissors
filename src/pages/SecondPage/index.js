import { useParams } from "react-router-dom";
import GameButton from "../../components/GameButton";
import scissorsImg from '../../images/icon-scissors.svg';
import rockImg from '../../images/icon-rock.svg';
import paperImg from '../../images/icon-paper.svg';
import { Container, Wrapper } from "./SecondPage.styles";

const SecondPage = () => {
  const {chosen} = useParams()
  const whatWasChosen = {
    paper: {
      image: paperImg,
      lightColor: 'hsl(230, 89%, 65%)',
      darkColor: 'hsl(230, 89%, 62%)'
    },
    scissors: {
      image: scissorsImg,
      lightColor: 'hsl(40, 84%, 53%)',
      darkColor: 'hsl(40, 84%, 49%)'
    },
    rock: {
      image: rockImg,
      lightColor: 'hsl(349, 70%, 56%)',
      darkColor: 'hsl(349, 70%, 52%)'
    }
  }
  let playerChose;
  switch (chosen) {
    case 'paper':
    playerChose = whatWasChosen.paper;
    break;
    case 'scissors':
    playerChose = whatWasChosen.scissors;
    break;
    case 'rock':
    playerChose = whatWasChosen.rock;
    break;
    default:
    playerChose = whatWasChosen.rock
    break;
  }
  let AIrandom = Math.ceil(Math.random()*3);
  let computerChose;
  switch (AIrandom) {
    case 1:
    computerChose = whatWasChosen.paper;
    break;
    case 2:
    computerChose = whatWasChosen.scissors;
    break;
    case 3:
    computerChose = whatWasChosen.rock;
    break;
    default:
    computerChose = whatWasChosen.rock
    break;
  }

  return ( 
    <Wrapper>
      <Container>
        <div><GameButton image={playerChose.image} lightColor={playerChose.lightColor} darkColor={playerChose.darkColor} type={chosen}/></div>
        <h3>YOU PICKED</h3>
      </Container>
      <Container>
        <aside><GameButton image={computerChose.image} lightColor={computerChose.lightColor} darkColor={computerChose.darkColor} type={chosen}/></aside>
        <h3>THE HOUSE PICKED</h3>
      </Container>
    </Wrapper>
   );
}
 
export default SecondPage;