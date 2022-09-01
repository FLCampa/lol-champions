// External Libraries
import React from "react";

// Components
import TopBar from "../TopBar";
import List from "../List";

// Stylization
import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />

      <Wrapper>
        <List />
      </Wrapper>
    </Container>
  );
};

export default Layout;
