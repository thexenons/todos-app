import type { InputHTMLAttributes } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface InputProps extends InputBaseProps {
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}
