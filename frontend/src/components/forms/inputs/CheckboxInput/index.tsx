import { forwardRef } from "react";

import Input from "../Input";
import { CheckboxInputProps } from "./types";

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
	(props, ref) => (
		<Input
			{...props}
			defaultChecked={!!props.defaultChecked}
			type="checkbox"
			ref={ref}
		/>
	)
);
CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;
