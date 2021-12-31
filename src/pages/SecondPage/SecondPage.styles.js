import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  max-width: 600px;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  div, aside{
    margin-bottom: 1.5em;
    width: 70%;
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
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
`;