import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GameButton from "../../components/GameButton";
import scissorsImg from '../../images/icon-scissors.svg';
import rockImg from '../../images/icon-rock.svg';
import paperImg from '../../images/icon-paper.svg';
import { Container, LastSection, Wrapper } from "./SecondPage.styles";

const SecondPage = () => {

  const {chosen} = useParams()
  const whatWasChosen = {
    paper: {
      image: paperImg,
      lightColor: 'hsl(230, 89%, 65%)',
      darkColor: 'hsl(230, 89%, 62%)',
      type: 'paper'
    },
    scissors: {
      image: scissorsImg,
      lightColor: 'hsl(40, 84%, 53%)',
      darkColor: 'hsl(40, 84%, 49%)',
      type: 'scissors'
    },
    rock: {
      image: rockImg,
      lightColor: 'hsl(349, 70%, 56%)',
      darkColor: 'hsl(349, 70%, 52%)',
      type: 'rock'
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
  let winOrLose;
    if(playerChose.type === computerChose.type){
      winOrLose = 'DRAWED';
    }else if((playerChose.type === 'rock' && computerChose.type === 'scissors') || (playerChose.type === 'scissors' && computerChose.type === 'paper') || (playerChose.type === 'paper' && computerChose.type === 'rock')) {
      winOrLose = 'WIN';
    }else{
      winOrLose = 'LOSE';
    }


  return ( 
    <Wrapper>
      <Container>
        <div><GameButton image={playerChose.image} lightColor={playerChose.lightColor} darkColor={playerChose.darkColor} type={playerChose.type}/></div>
        <h3>YOU PICKED</h3>
      </Container>
      <Container>
        <aside><GameButton image={computerChose.image} lightColor={computerChose.lightColor} darkColor={computerChose.darkColor} type={computerChose.type}/></aside>
        <h3>THE HOUSE PICKED</h3>
      </Container>
      <LastSection>
        <p>{`YOU ${winOrLose}!`}</p>
        <Link to='/'><button>PLAY AGAIN</button></Link>
      </LastSection>
    </Wrapper>
   );
}
 
export default SecondPage;