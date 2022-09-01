// External Libraries
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Components
import TopBar from "../TopBar";

// Stylization
import {
  Container,
  Wrapper,
  HomeButton,
  Filter,
  ImageContainer,
  ChampionInfo,
  HorizontalDivider,
  Header,
  Title,
  Name,
  Body,
  Division,
  Tag,
  VerticalDivider,
} from "./styles";

const Details: React.FC = () => {
  const router = useRouter();

  const {
    query: { title, id, tag, difficulty, blurb, image },
  } = router;

  const detailsImageLoader = () => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
  };

  const setChampionDifficulty = () => {
    const championDifficulty = Number(difficulty);

    if (championDifficulty < 4) return "LOW";
    if (championDifficulty < 8) return "MODERATE";
    return "HIGH";
  };

  return (
    <Container>
      <TopBar dark />

      <Wrapper>
        <Link href="/">
          <HomeButton>
            <span>CHAMPION LIST</span>
            <Image
              src="/champion.svg"
              alt="champion icon"
              width="14"
              height="14"
            />
          </HomeButton>
        </Link>

        <Filter />

        <ImageContainer>
          <Image
            loader={detailsImageLoader}
            src={`${image}`}
            alt="champion image"
            width="1215"
            height="717"
          />
        </ImageContainer>

        <ChampionInfo>
          <div>
            <HorizontalDivider />
            <HorizontalDivider />
          </div>

          <Header>
            <Title>{title}</Title>
            <Name>{id}</Name>
          </Header>

          <Body>
            <Division>
              <div>
                <h4>ROLE</h4>
                <Tag>{tag}</Tag>
              </div>

              <div>
                <h4>DIFFICULTY</h4>
                <h5>{setChampionDifficulty()}</h5>
              </div>
            </Division>

            <VerticalDivider />

            <Division>
              <p>{blurb}</p>
            </Division>
          </Body>
        </ChampionInfo>
      </Wrapper>
    </Container>
  );
};

export default Details;
