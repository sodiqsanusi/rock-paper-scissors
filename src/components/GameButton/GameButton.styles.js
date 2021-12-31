import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 90%;
  padding: 2em;
  border: 20px solid ${({lightColor}) => lightColor};
  border-radius: 100%;
  box-shadow: inset 0 5px rgba(0, 0, 0, 0.2), 0 5px ${({darkColor}) => darkColor};
  -webkit-tap-highlight-color: transparent;
`;