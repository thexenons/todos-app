import { FieldValues, RegisterOptions } from "react-hook-form";

import { InputBaseProps } from "../InputBase/types";

export interface SelectInputChoice {
	value: InputBaseProps["value"];
	label: string;
}

export interface SelectInputProps extends InputBaseProps {
	choices: SelectInputChoice[];
	name: string;
	rules?: Omit<
		RegisterOptions<FieldValues, string>,
		"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
	>;
}
