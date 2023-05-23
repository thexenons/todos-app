import { InputProps } from "../Input/types";

export interface DateInputProps extends Omit<InputProps, "type"> {
	enableTime?: boolean;
}
