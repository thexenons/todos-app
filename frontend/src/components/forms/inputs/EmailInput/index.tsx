import { forwardRef } from "react";

import { checkIsEmail } from "../../../../utils/validations/email";
import Input from "../Input";
import { EmailInputProps } from "./types";

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
	(props, ref) => {
		const { defaultValue } = props;

		if (defaultValue) {
			if (typeof defaultValue !== "string")
				throw new Error("[EmailInput] Invalid value type");

			if (!checkIsEmail(defaultValue))
				throw new Error(
					"[EmailInput] defaultValue is not a valid email address"
				);
		}

		return (
			<Input
				{...props}
				defaultValue={defaultValue ?? ""}
				type="email"
				ref={ref}
			/>
		);
	}
);
EmailInput.displayName = "EmailInput";

export default EmailInput;
