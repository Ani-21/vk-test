type Response = {
  count: number;
  name: string;
  age: number;
};

const Response = (props: Response) => {
  const { age } = props;
  return <h1>{age}</h1>;
};

export default Response;
