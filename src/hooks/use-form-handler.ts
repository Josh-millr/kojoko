import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormValues = Record<string, string>;

interface FormHandler<Values extends FormValues> {
  defaultValues: Values;
  // @audit - The inferred type from "formSchema" that defines "defaultValue" is not properly set.
  formSchema: ZodType<Values>;
  // eslint-disable-next-line no-unused-vars
  submit: (params: Values) => void;
}

export const useFormHandler = <Values extends FormValues>(
  params: FormHandler<Values>,
) => {
  const { defaultValues, formSchema, submit } = params;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // @ts-ignore
    defaultValues,
  });

  const submitForm = form.handleSubmit(submit);

  return { form, submitForm };
};
