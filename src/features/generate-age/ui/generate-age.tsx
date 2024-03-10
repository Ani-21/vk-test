import { Icon16Clear } from "@vkontakte/icons";
import { Button, FormItem, IconButton, Input } from "@vkontakte/vkui";
import { Controller, useForm } from "react-hook-form";

import resolver from "../lib/resolver/age-resolver";
import { AgeFormSchema } from "../model/types/age-schema.types";

type GenerateAgeProps = {
  onSubmit: (data: AgeFormSchema) => void;
};

const GenerateAge = (props: GenerateAgeProps) => {
  const { onSubmit } = props;
  const { handleSubmit, control, reset, formState } = useForm<AgeFormSchema>({ resolver });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        status={formState.errors.name ? "error" : "default"}
        bottom={formState.errors.name ? formState.errors.name.message : ""}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              status={formState.errors.name ? "error" : "default"}
              after={
                <IconButton hoverMode="opacity" label="Очистить поле" onClick={() => reset()}>
                  <Icon16Clear />
                </IconButton>
              }
            />
          )}
        />
      </FormItem>
      <FormItem>
        <Button type="submit">Get Age</Button>
      </FormItem>
    </form>
  );
};

export default GenerateAge;
