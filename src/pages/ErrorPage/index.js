import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  padding: 0 1em;
  p{
    margin: .5em 0;
  }
  button{
    font-size: 1.5rem;
    padding: .5em 2em;
    color: var(--darkText);
    cursor: pointer;
    transition: .3s;
    :hover,:focus{
      transform: scale(0.9);
      opacity: 20%;
    }
  }
`;

const ErrorPage = () => {

  return (
    <Wrapper>
      <h1>This Page Cannot Be Loaded</h1>
      <p>This is probably due to bad internet connection, check your connection <br /> and come back
       to be WHOOPED by the rock, paper, scissors AI!</p>
      <Link to='/'><button>Go To Homepage</button></Link>
    </Wrapper>
  )
}

export default ErrorPage