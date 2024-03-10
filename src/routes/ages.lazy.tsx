import { createLazyFileRoute } from "@tanstack/react-router";
import { Div, Title } from "@vkontakte/vkui";
import AgeWithActions from "src/widgets/age-with-actions/age-with-actions";

export const Route = createLazyFileRoute("/ages")({
  component: Ages,
});

function Ages() {
  return (
    <Div>
      <Div>
        <Title>Get your age</Title>
      </Div>
      <AgeWithActions />
    </Div>
  );
}
