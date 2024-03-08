import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/facts")({
  component: Facts,
});

function Facts() {
  return (
    <div>
      <h1>Fact</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
