import { createLazyFileRoute } from "@tanstack/react-router";
import { Div, Title } from "@vkontakte/vkui";
import { BackLink } from "src/shared/ui";
import { FactWithActions } from "src/widgets";

export const Route = createLazyFileRoute("/facts")({
  component: Facts,
});

function Facts() {
  return (
    <Div>
      <Title
        style={{
          display: "table",
          margin: "0 auto",
        }}
      >
        Cat Fact
      </Title>
      <BackLink />
      <FactWithActions />
    </Div>
  );
}
