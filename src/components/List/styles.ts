// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin: 30px 0;
`;

export const Content = styled.div`
  width: fit-content;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
