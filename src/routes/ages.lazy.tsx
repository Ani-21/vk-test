import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ages")({
  component: Ages,
});

function Ages() {
  return (
    <div>
      <h1>Ages</h1>
    </div>
  );
}
