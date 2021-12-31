import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --darkText: hsl(229, 25%, 31%);
    --scoreText: hsl(229, 64%, 46%);
    --headerOutline: hsl(217, 16%, 45%);
    font-size: 16px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  body{
    position: relative;
    background-color: hsl(214, 47%, 23%);
    background-image: linear-gradient(to bottom right, hsl(214, 47%, 23%), hsl(237, 49%, 15%) 75%);
    background-repeat: no-repeat;
    background-position: center;
    @media(min-width: 700px){
      height: 100vh;
    }
  }
  img{
    width: 100%;
  }
  .App{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;