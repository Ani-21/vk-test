import { useQuery } from "@tanstack/react-query";
import { Fact } from "src/entities/fact";
import { FactField } from "src/entities/fact";
import { GenerateFact } from "src/features/generate-fact";

const FactWithActions = () => {
  const { isLoading, error, data, refetch, isFetching } = useQuery<Fact>({
    queryKey: ["fact"],
    queryFn: () => fetch("https://catfact.ninja/fact").then((res) => res.json()),
    enabled: false,
  });

  const onRefetchHandler = () => refetch();

  if (error) {
    return <h1>Что-то пошло не так</h1>;
  }

  return (
    <FactField
      data={data}
      isFetching={isFetching}
      GenerateFact={<GenerateFact isLoading={isLoading} onRefetch={onRefetchHandler} />}
    />
  );
};

export default FactWithActions;
