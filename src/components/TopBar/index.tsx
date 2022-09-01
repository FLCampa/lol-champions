// External Libraries
import React from "react";
import Image from "next/image";

// Stylization
import { Container, Wrapper } from "./styles";

interface TopBarProps {
  dark?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ dark }) => {
  return (
    <Container dark={dark}>
      <Wrapper>
        <Image src="/logo.jpg" alt="logo" width="64" height="64" />
        <h1>LoL Champions</h1>
      </Wrapper>
    </Container>
  );
};

export default TopBar;
