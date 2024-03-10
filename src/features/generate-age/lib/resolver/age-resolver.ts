import { createError, createResolver, ValidateFormFunction } from "src/shared/utils";

import { AgeFormSchema } from "../..";

const reg = /^[aA-zZ\s]+$/;

const validateAgeFormSchema: ValidateFormFunction<AgeFormSchema> = (values, errors) => {
  if (!reg.test(values.name)) {
    errors.name = createError("Only alphabets are allowed for this field");
  }
  if (!values.name) {
    errors.name = createError("This field is required");
  }

  return errors;
};

export default createResolver(validateAgeFormSchema);
