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
import { getLocationFx } from "../api/locations";
import { locationsStore } from "../store/locationsStore";

export default function Home() {
  const locations = useUnit({
    locations: locationsStore,
    getLocationFx: getLocationFx,
  });

  useEffect(() => {
    locations.getLocationFx();
  }, [locations.getLocationFx]);

  return (
    <Panel>
      <Group title="Rick and Morty Characters">
        <CardGrid size="l">
          {locations.locations.map((location: any) => (
            <Card key={location.id} style={{ padding: "20px" }}>
              <Div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <Title level="2" style={{ marginBottom: "10px" }}>
                    {location.name}
                  </Title>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Type: ${location.type}`}</Text>
                  <Text
                    style={{ marginBottom: "5px" }}
                  >{`Dimention: ${location.dimension}`}</Text>
                  {/* <Text
                    style={{ marginBottom: "5px" }}
                  >{`Residents: ${location.residents}`}</Text> */}
                  <Text>{`Created: ${location.created}`}</Text>
                </div>
              </Div>
            </Card>
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
}
