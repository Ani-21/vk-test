import { useMutation } from "@tanstack/react-query";
import { Button, FormItem, Input } from "@vkontakte/vkui";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Age } from "src/entities/age";

import { fetchAgeByName } from "..";
import { getBottom, getStatus } from "../lib/helpers/form-item.helpers";
import { useDebounce } from "../lib/hooks/use-debounce/use-debounce";
import resolver from "../lib/resolver/age-resolver";
import { AgeFormSchema } from "../model/types/age-schema.types";

const GenerateAge = () => {
  const mutation = useMutation({ mutationFn: fetchAgeByName });
  const { handleSubmit, control, formState, setValue } = useForm<AgeFormSchema>({
    resolver,
  });
  const debouncedFn = useDebounce(mutation.mutate, 3000);

  const inputChanged = (field: keyof AgeFormSchema, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(field, e.target.value);
    e.target.value && debouncedFn(e.target.value).then((res) => console.log(res));
  };

  const onSubmit = (data: AgeFormSchema) => {
    const { name } = data;
    if (!name) return;
    mutation.mutate(name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        status={getStatus(formState, mutation)}
        bottom={mutation.isSuccess ? <Age data={mutation.data} /> : getBottom(formState, mutation)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { name } }) => (
            <Input
              onChange={(e) => inputChanged(name, e)}
              status={formState.errors.name ? "error" : "default"}
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
