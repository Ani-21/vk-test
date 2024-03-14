import { useMutation } from "@tanstack/react-query";
import { Icon16Clear } from "@vkontakte/icons";
import { Button, FormItem, IconButton, Input } from "@vkontakte/vkui";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { fetchAgeByName } from "..";
import { useDebounce } from "../lib/hooks/use-debounce/use-debounce";
import resolver from "../lib/resolver/age-resolver";
import { AgeFormSchema } from "../model/types/age-schema.types";

type GenerateAgeProps = {
  onSubmit: (data: AgeFormSchema) => void;
};

const GenerateAge = (props: GenerateAgeProps) => {
  const { onSubmit } = props;
  const mutation = useMutation({ mutationFn: fetchAgeByName });
  const { handleSubmit, control, reset, formState, setValue } = useForm<AgeFormSchema>({
    resolver,
  });
  const debouncedFn = useDebounce(mutation.mutate, 3000);

  const inputChanged = (field: keyof AgeFormSchema, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(field, e.target.value);
    e.target.value && debouncedFn(e.target.value).then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        status={formState.errors.name ? "error" : "default"}
        bottom={formState.errors.name ? formState.errors.name.message : ""}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { name } }) => (
            <Input
              onChange={(e) => inputChanged(name, e)}
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
