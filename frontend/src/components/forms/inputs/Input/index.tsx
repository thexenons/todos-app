import { forwardRef, useId } from "react";
import { useController, useFormContext } from "react-hook-form";
import * as S from "./styled";
import type { InputBaseProps, InputProps } from "./types";

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
	({ label = "", ...rest }, ref) => {
		const id = useId();

		return (
			<S.InputWrapper>
				<S.InputLabel htmlFor={rest.id || id}>{label}</S.InputLabel>
				<S.InputElement {...rest} id={rest.id || id} ref={ref} />
			</S.InputWrapper>
		);
	}
);
InputBase.displayName = "InputBase";

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ rules, name, ...rest }, ref) => {
		const { control } = useFormContext();
		const { field } = useController({
			name,
			control,
			rules,
			defaultValue: rest.value || "",
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
