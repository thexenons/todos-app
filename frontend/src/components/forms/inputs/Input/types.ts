import { FieldValues, RegisterOptions } from "react-hook-form";

import { InputBaseProps } from "../InputBase/types";

export interface InputProps extends InputBaseProps {
	name: string;
	rules?: Omit<
		RegisterOptions<FieldValues, string>,
		"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
	>;
}
