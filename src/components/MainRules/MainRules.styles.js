import styled from 'styled-components';

export const Wrapper = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 2em 1em;
  background-color: #fff;
  @media(min-width: 700px){
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 100px;
  justify-items: center;
  background-color: #fff;
  color: var(--darkText);
  font-size: 1.2rem;
  h1{
    margin-top: 1em;
    font-weight: 600;
  }
  button{
    background-color: transparent;
    border: none;
    outline: none;
    width: 7%;
    max-width: 200px;
    transition: .3s;
    cursor: pointer;
    :hover,:focus{
      transform: scale(0.8);
    }
  }
  @media(min-width: 700px){
    max-width: 350px;
    border-radius: 8px;
    max-height: 350px;
    grid-template-columns: 1fr 1fr;
    padding: 0 1em;
    align-items: center;
    h1{
      grid-column: 1/2;
      margin: 0;
      position: relative;
      right: 1em;
    }
    button{
      grid-column: 2/3;
      grid-row: 1/2;
      position: relative;
      left: 40%;
    }
    section{
      position: relative;
      top: 1em;
      width: 70%;
      grid-column: 1/3;
    }
  }
`;