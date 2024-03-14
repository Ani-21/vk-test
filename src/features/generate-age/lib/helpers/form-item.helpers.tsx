import { UseMutationResult } from "@tanstack/react-query";
import { Spinner } from "@vkontakte/vkui";
import { FormState } from "react-hook-form";
import { AgeResponse } from "src/entities/age";

import { AgeFormSchema } from "../..";

export const getStatus = (
  formState: FormState<AgeFormSchema>,
  mutation: UseMutationResult<AgeResponse, Error, string, unknown>,
) => {
  if (formState.errors.name) {
    return "error";
  } else if (mutation.isSuccess) {
    return "valid";
  } else {
    return "default";
  }
};

export const getBottom = (
  formState: FormState<AgeFormSchema>,
  mutation: UseMutationResult<AgeResponse, Error, string, unknown>,
) => {
  if (formState.errors.name) {
    return formState.errors.name.message;
  } else if (mutation.isPending) {
    return <Spinner />;
  } else if (mutation.isError) {
    return mutation.error.message;
  }
};
