import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #000;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1330px;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  margin: 30px 0;
`;

export const HomeButton = styled.a`
  position: absolute;
  top: 0;
  right: 58px;

  display: flex;
  align-items: center;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  color: white;
  z-index: 2;

  padding: 10px;
  border: 1.5px solid #00b2cf;
  background: #000913;

  &:hover {
    cursor: pointer;
  }

  > span {
    padding-right: 10px;
  }

  @media (max-width: 1220px) {
    right: 0;
  }
`;

export const Filter = styled.div`
  width: 100%;
  min-height: 1000px;

  position: absolute;
  z-index: 1;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1)
  );
`;

export const ImageContainer = styled.div`
  height: 717px;
`;

export const ChampionInfo = styled.div`
  position: absolute;
  top: 630px;

  max-width: 1093px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  font-style: italic;

  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;

  > div {
    display: flex;

    width: 100%;
    justify-content: space-between;
  }
`;

export const HorizontalDivider = styled.div`
  width: 25%;
  height: 1px;

  background: rgba(255, 255, 255, 0.2);
`;

export const Header = styled.div`
  position: absolute;
  top: -85px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Name = styled.h1`
  font-size: 100px;
  font-weight: 700;
  padding: 0 40px;

  @media (max-width: 600px) {
    font-size: 45px;
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Division = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 60px;

  > div {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

export const Tag = styled.h5`
  text-transform: uppercase;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 140px;

  margin: auto;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 600px) {
    display: none;
  }
`;
