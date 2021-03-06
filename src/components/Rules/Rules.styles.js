import styled from 'styled-components';

export const RulesBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 30%;
  max-width: 40px;
  padding: .5em 3em;
  border: 1px #fff solid;
  border-radius: 8px;
  font-size: 1rem;
  letter-spacing: 1.5px;
  transition: .3s;
  margin-top: 4em;
  margin-bottom: 20vh;
  :hover,:focus{
    transform: scale(0.9);
    opacity: 20%;
  }
  @media(min-width: 700px){
    position: absolute;
    bottom: 5%;
    right: 5%;
    margin: 0;
  }
`;