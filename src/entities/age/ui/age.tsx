type Response = {
  count: number;
  username: string;
  age: number;
};

type AgeProps = {
  data: Response | undefined;
};

const Age = (props: AgeProps) => {
  const { data } = props;

  return <h1>{data?.age}</h1>;
};

export default Age;
