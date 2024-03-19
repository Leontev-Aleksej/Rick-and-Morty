import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import {
  Panel,
  Group,
  CardGrid,
  Card,
  Div,
  Avatar,
  Title,
  Text,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { getEpisodeFx } from "../api/episodes";
import { episodesStore } from "../store/episodesStore";

export default function Home() {
  const episodes = useUnit({
    episodes: episodesStore,
    getEpisodeFx: getEpisodeFx,
  });

  useEffect(() => {
    episodes.getEpisodeFx();
  }, [episodes.getEpisodeFx]);

  return (
    <Panel>
      <Group title="Rick and Morty Characters">
        <CardGrid size="l">
          {episodes.episodes.map((episode: any) => (
            <Card key={episode.id} style={{ padding: "20px" }}>
              <Div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <Title level="2" style={{ marginBottom: "10px" }}>
                    {episode.name}
                  </Title>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Air date: ${episode.air_date}`}</Text>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Episode: ${episode.episode}`}</Text>
                  {/* <Text
                    style={{ marginBottom: "5px" }}
                  >{`Residents: ${location.residents}`}</Text> */}
                  <Text>{`Created: ${episode.created}`}</Text>
                </div>
              </Div>
            </Card>
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
}
