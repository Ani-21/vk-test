import { createLazyFileRoute } from "@tanstack/react-router";
import { Div, Title } from "@vkontakte/vkui";
import { BackLink } from "src/shared/ui";
import AgeWithActions from "src/widgets/age-with-actions/age-with-actions";

export const Route = createLazyFileRoute("/ages")({
  component: Ages,
});

function Ages() {
  return (
    <Div>
      <Title
        style={{
          display: "table",
          margin: "0 auto",
        }}
      >
        Get your age
      </Title>
      <BackLink />
      <AgeWithActions />
    </Div>
  );
}
