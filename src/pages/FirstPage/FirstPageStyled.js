import styled from 'styled-components';
import bgTriangle from '../../images/bg-triangle.svg';

export const Wrapper = styled.main`
  max-width: 400px;
  width: 90%;
  padding: 0 1em;
  background-image: url(${bgTriangle});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
`;
export const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5em;
`;
export const Div2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;