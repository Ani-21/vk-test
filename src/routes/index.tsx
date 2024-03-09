import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/facts">Facts</Link>
      <Link to="/ages">Ages</Link>
    </div>
  );
}
