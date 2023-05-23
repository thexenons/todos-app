import { forwardRef } from "react";

import Input from "../Input";
import { TextInputProps } from "./types";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => (
	<Input
		{...props}
		defaultValue={props.defaultValue ?? ""}
		type="text"
		ref={ref}
	/>
));
TextInput.displayName = "TextInput";

export default TextInput;
