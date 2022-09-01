// External Libraries
import React, { useEffect, useState } from "react";

// Components
import Card from "../Card";

// Services
import axios from "axios";

// Stylization
import { Container, Content } from "./styles";

// Utils
import { championsUrl, sendProps } from "../../utils";

const List: React.FC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(championsUrl).then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Content>
          {Object.entries(data).map(([key, value]) => {
            return (
              <a
                key={key}
                onClick={() =>
                  sendProps(
                    (value as any).title,
                    (value as any).id,
                    (value as any).tags[0],
                    (value as any).info.difficulty,
                    (value as any).blurb,
                    (value as any).image.full
                  )
                }
              >
                <Card name={(value as any).id} />
              </a>
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export default List;
