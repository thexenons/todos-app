import { forwardRef } from "react";
import { useController, useFormContext } from "react-hook-form";

import InputBase from "../InputBase";
import type { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ rules, name, defaultValue, defaultChecked, ...rest }, ref) => {
		const { control } = useFormContext();
		const { field } = useController({
			name,
			control,
			rules,
			defaultValue: rest.value ?? defaultValue ?? defaultChecked,
		});
		const handleRef = (inputRef: HTMLInputElement) => {
			field.ref(inputRef);
			if (typeof ref === "function") {
				ref(inputRef);
			}
		};

		return <InputBase {...rest} {...field} ref={handleRef} />;
	}
);
Input.displayName = "Input";

export default Input;
