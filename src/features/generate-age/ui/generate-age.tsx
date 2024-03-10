import { Button, FormItem } from "@vkontakte/vkui";
import { useForm } from "react-hook-form";

import { AgeFormSchema } from "../model/types/age-schema.types";

type GenerateAgeProps = {
  onSubmit: (data: AgeFormSchema) => void;
};
const GenerateAge = (props: GenerateAgeProps) => {
  const { onSubmit } = props;
  const { register, handleSubmit } = useForm<AgeFormSchema>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <input type={"text"} {...register("name")} />
      </FormItem>
      <Button type="submit">Get Age</Button>
    </form>
  );
};

export default GenerateAge;
