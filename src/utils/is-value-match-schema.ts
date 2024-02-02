import type { ZodTypeAny } from 'zod';

export const isValueMatchSchema = (value: unknown, schema: ZodTypeAny) => {
  const isValid = schema.safeParse(value).success;
  return isValid;
};
