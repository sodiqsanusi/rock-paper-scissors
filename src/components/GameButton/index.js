import { Wrapper } from './GameButton.styles';

const GameButton = ({image, lightColor, darkColor, type}) => {
  return ( 
      <Wrapper darkColor={darkColor} lightColor={lightColor} type={type}>
        <img src={image} alt={`Click to select ${type} for this round`} />
      </Wrapper>
   );
}
 
export default GameButton;