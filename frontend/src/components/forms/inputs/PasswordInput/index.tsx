import { forwardRef } from "react";

import Input from "../Input";
import { PasswordInputProps } from "./types";

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	(props, ref) => (
		<Input
			{...props}
			defaultValue={props.defaultValue ?? ""}
			type="password"
			ref={ref}
		/>
	)
);
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
