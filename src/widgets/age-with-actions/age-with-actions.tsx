import { useMutation } from "@tanstack/react-query";
import { Div, Spinner } from "@vkontakte/vkui";
import { Age } from "src/entities/age";
import { AgeFormSchema, fetchAgeByName, GenerateAge } from "src/features/generate-age";

const AgeWithActions = () => {
  const mutation = useMutation({ mutationFn: fetchAgeByName });

  const onSubmit = (data: AgeFormSchema) => {
    const { name } = data;
    mutation.mutate(name);
  };

  return (
    <Div>
      <GenerateAge onSubmit={onSubmit} />
      {mutation.isPending && <Spinner />}
      {mutation.isSuccess && <Age data={mutation.data} />}
    </Div>
  );
};

export default AgeWithActions;
