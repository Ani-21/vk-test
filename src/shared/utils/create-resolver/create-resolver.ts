import type { FieldErrors, FieldValues, Resolver, ResolverOptions } from "react-hook-form";

export type ValidateFormFunction<Values extends FieldValues, Context = unknown> = (
  values: Values,
  errors: FieldErrors<Values>,
  context?: Context,
  options?: ResolverOptions<Values>,
) => FieldErrors<Values>;

export function createResolver<Values extends FieldValues, Context = unknown>(
  validateForm: ValidateFormFunction<Values, Context>,
): Resolver<Values, Context> {
  return (values, context, options) => ({
    values,
    errors: validateForm(values, {}, context, options),
  });
}

export const createError = (message: string) => ({
  type: "required",
  message,
});
