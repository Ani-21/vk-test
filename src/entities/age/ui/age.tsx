import { AgeResponse } from "../model/types/age-api.types";

type AgeProps = {
  data: AgeResponse | undefined;
};

const Age = (props: AgeProps) => {
  const { data } = props;

  const message = data?.age
    ? `You are ${data?.age} y.o.`
    : "Wow! Your name is so rare, we could not calculate your age...";

  return <p>{message}</p>;
};

export default Age;
