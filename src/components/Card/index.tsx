// External Libraries
import React from "react";
import Image from "next/image";

// Stylization
import { Container, Square, Bottom } from "./styles";

// Interfaces
interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  const cardImageLoader = () => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
  };

  return (
    <Container>
      <Square />
      <Image
        loader={cardImageLoader}
        src={`${name}.jpg`}
        alt="img"
        width="250"
        height="290"
        objectFit="cover"
        objectPosition="top"
      />
      <Bottom>{name}</Bottom>
    </Container>
  );
};

export default Card;
