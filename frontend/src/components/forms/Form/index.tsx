import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./types";

const Form = <FV extends FieldValues>({
  onSubmit,
  children,
}: FormProps<FV>) => {
  const form = useForm<FV>();

  return (
    <FormProvider<FV> {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
