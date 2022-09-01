// External Libraries
import styled from "styled-components";

interface ContainerProps {
  dark?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 80px;

  position: sticky;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.dark ? "white" : "black")};

  background: ${(props) => (props.dark ? "black" : "rgba(255, 255, 255, 0.5)")};

  border-bottom: ${(props) =>
    props.dark
      ? "solid 1px rgba(255, 255, 255, 0.3)"
      : "solid 1px rgba(0, 0, 0, 0.3)"};

  backdrop-filter: blur(10px);

  > h1 {
    margin-left: 20px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1330px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;
