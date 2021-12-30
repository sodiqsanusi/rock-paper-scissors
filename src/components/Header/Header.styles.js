import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  padding: 2em;
  max-width: 700px;
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border: 3px solid var(--headerOutline);
  border-radius: 8px;
`;

export const Section1 = styled.section`
  width: 35%;
  margin-left: .5em;
  max-width: 150px;
`;
export const Section2 = styled.section`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  flex-direction: column;
  padding: .5em 1em;
  width: 40%;
  max-width: 150px;
  p{
    color: var(--scoreText);
    font-weight: 700;
    letter-spacing: 1px;
  }
  h1{
    color: var(--darkText);
    font-size: 3rem;
  }
`;