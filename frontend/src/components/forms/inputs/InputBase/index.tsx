import { forwardRef, useId, useMemo, useState } from "react";

import * as S from "./styled";
import type { InputBaseProps } from "./types";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
	(
		{
			label = "",
			id,
			type = "text",
			placeholder = " ",
			hasError = false,
			onClick,
			...rest
		},
		ref
	) => {
		const uniqueId = useId();
		const [labelElement, setLabelElement] = useState<HTMLLabelElement | null>(
			null
		);

		const hasPlaceholder = useMemo(
			() => !!(placeholder && placeholder !== " "),
			[placeholder]
		);

		if (["file", "image", "reset", "submit"].includes(type))
			throw new Error(`InputBase: type ${type} not supported`);

		if (
			[
				"checkbox",
				"color",
				"date",
				"datetime-local",
				"radio",
				"range",
				"time",
			].includes(type) &&
			hasPlaceholder
		)
			throw new Error(`InputBase: type ${type} does not support placeholder`);

		if (["button"].includes(type) && !onClick)
			throw new Error(`InputBase: type ${type} requires onClick prop`);

		return (
			<S.InputWrapper
				$variant={
					["checkbox", "radio"].includes(type) ? "horizontal" : "vertical"
				}
				$minWidth={labelElement?.offsetWidth}
				data-has-error={!!hasError}
			>
				<S.InputElement
					{...rest}
					id={id || uniqueId}
					ref={ref}
					type={type}
					placeholder={placeholder}
					data-has-placeholder={hasPlaceholder}
					$hideBorderBottom={type === "color"}
					onClick={onClick}
				/>
				<S.InputLabel ref={setLabelElement} htmlFor={id || uniqueId}>
					{label}
				</S.InputLabel>
			</S.InputWrapper>
		);
	}
);
InputBase.displayName = "InputBase";

export default InputBase;
