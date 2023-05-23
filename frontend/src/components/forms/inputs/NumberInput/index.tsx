import { forwardRef } from "react";

import Input from "../Input";
import { NumberInputProps } from "./types";

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	(props, ref) => {
		const { defaultValue } = props;

		if (defaultValue) {
			if (typeof defaultValue !== "number")
				throw new Error("[NumberInput] Invalid value type");
		}

		return (
			<Input
				{...props}
				defaultValue={defaultValue ?? ""}
				type="number"
				ref={ref}
			/>
		);
	}
);
NumberInput.displayName = "NumberInput";

export default NumberInput;
