import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 1em;
  max-width: 600px;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  div, aside{
    margin-bottom: 1.5em;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 170px;
  }aside{
      background-color: var(--darkText);
      border-radius: 100%;
      animation: lilac .5s ease-in forwards;
      button{
        visibility: hidden;
        animation: foo .5s .5s ease-in forwards;
      }
      @keyframes lilac {
        to{
          background-color: transparent;
        }
      }
      @keyframes foo {
        to{
          visibility: visible;
        }
      }
    }
  h3{
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
`;

export const LastSection = styled.section`
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2em;
    animation: cruise .5s .5s ease-in forwards;
    visibility: hidden;
    @keyframes cruise{
      to{
        visibility: visible;
      }
    }
    p{
      color: #fff;
      font-size: 3rem;
      letter-spacing: 1.5px;
      margin-bottom: .3em;
    }
    button{
      padding: 1em 3em;
      cursor: pointer;
      font-size: 1rem;
      letter-spacing: 2px;
      border: none;
      border-radius: 8px;
      color: var(--scoreText);
      transition: .3s;
      :hover,:focus{
        transform: scale(0.9);
        opacity: 20%;
      }
    }
`;