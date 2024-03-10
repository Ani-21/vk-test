import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentCard, Div, Title } from "@vkontakte/vkui";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Div>
      <Title
        style={{
          display: "table",
          margin: "0 auto",
        }}
      >
        Pass the time with these delightful apps
      </Title>
      <Div>
        <Div>
          <Link to="/facts" style={{ textDecoration: "none", display: "block" }}>
            <ContentCard subtitle="Learn some facts about cats" header="CatFact Ninja" hasHover />
          </Link>
        </Div>
        <Div>
          <Link to="/ages" style={{ textDecoration: "none", display: "block" }}>
            <ContentCard subtitle="Get age by your name" header="Agify" hasHover />
          </Link>
        </Div>
      </Div>
    </Div>
  );
}
