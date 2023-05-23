import { forwardRef } from "react";

import { checkIfDateString } from "../../../../utils/validations/date";
import Input from "../Input";
import { DateInputProps } from "./types";

const DateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
	const { defaultValue, enableTime = false } = props;

	if (defaultValue) {
		if (!checkIfDateString(defaultValue))
			throw new Error("[DateInput] defaultValue is not a valid date string");

		if (enableTime) {
			if (!String(defaultValue).includes("T"))
				throw new Error(
					"[DateInput] defaultValue is not a valid date string with time"
				);
		} else {
			if (String(defaultValue).includes("T"))
				throw new Error(
					"[DateInput] defaultValue is not a valid date string without time"
				);
		}
	}

	return (
		<Input
			{...props}
			defaultValue={defaultValue ?? ""}
			type={enableTime ? "datetime-local" : "date"}
			ref={ref}
		/>
	);
});
DateInput.displayName = "DateInput";

export default DateInput;
