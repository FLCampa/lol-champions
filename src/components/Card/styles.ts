// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 335px;

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: translate(90%, -90%) rotate(45deg);
    }

    div:last-child {
      background-color: #006680;
      padding-left: 30px;
    }
  }
`;

export const Square = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 11%;
  padding-top: 11%;
  z-index: 1;

  opacity: 1;
  background-color: white;
  transition: transform 0.35s ease 0s;
  transform: translate(50%, -50%) rotate(45deg);
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;

  height: 53px;

  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: italic;
  color: white;

  padding: 0 20px;
  background-color: #061c25;
  transition: all 0.35s ease 0s;
`;
