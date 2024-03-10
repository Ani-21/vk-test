import { Link } from "@tanstack/react-router";
import { Link as NavigationLink } from "@vkontakte/vkui";

const BackLink = () => {
  return (
    <NavigationLink>
      <Link
        to="/"
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Go Back
      </Link>
    </NavigationLink>
  );
};

export default BackLink;
