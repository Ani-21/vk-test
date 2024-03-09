import { createLazyFileRoute } from "@tanstack/react-router";
import { Div, Title } from "@vkontakte/vkui";
import { FactWithActions } from "src/widgets";

export const Route = createLazyFileRoute("/facts")({
  component: Facts,
});

function Facts() {
  return (
    <Div>
      <Div>
        <Title>Cat Fact</Title>
      </Div>
      <FactWithActions />
    </Div>
  );
}
