import { useMutation } from "@tanstack/react-query";
import { Button, FormItem, Input } from "@vkontakte/vkui";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Age } from "src/entities/age";

import { fetchAgeByName } from "..";
import { getBottom, getStatus } from "../lib/helpers/form-item.helpers";
import { useDebounce } from "../lib/hooks/use-debounce/use-debounce";
import resolver from "../lib/resolver/age-resolver";
import { makeUniqueMutation } from "../model/api/make-unique-request";
import { AgeFormSchema } from "../model/types/age-schema.types";

const GenerateAge = () => {
  const mutation = useMutation({ mutationFn: fetchAgeByName });
  const { handleSubmit, control, formState, setValue } = useForm<AgeFormSchema>({
    resolver,
  });
  const debouncedFn = useDebounce(mutation.mutate, 3000);
  const inputChanged = (field: keyof AgeFormSchema, e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(field, e.target.value);
    e.target.value && makeUniqueMutation(e.target.value, () => debouncedFn(e.target.value));
  };

  const onSubmit = (data: AgeFormSchema) => {
    const { name } = data;
    if (!name) return;
    makeUniqueMutation(name, () => mutation.mutateAsync(name));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        status={getStatus(formState, mutation)}
        bottom={getBottom(formState, mutation, <Age data={mutation.data} />)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { name, ref, onBlur } }) => (
            <Input
              getRef={ref}
              onChange={(e) => inputChanged(name, e)}
              onBlur={onBlur}
              status={formState.errors.name ? "error" : "default"}
              required
            />
          )}
        />
      </FormItem>
      <FormItem>
        <Button disabled={mutation.isPending} type="submit">
          Get Age
        </Button>
      </FormItem>
    </form>
  );
};

export default GenerateAge;
