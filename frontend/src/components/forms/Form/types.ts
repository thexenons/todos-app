import { PropsWithChildren } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export interface FormProps<FieldsType extends FieldValues>
  extends PropsWithChildren {
  onSubmit: SubmitHandler<FieldsType>;
}
