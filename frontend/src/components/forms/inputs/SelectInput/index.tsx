import { forwardRef } from "react";

import InputBase from "../InputBase";
import useSelectInput from "./hooks/useSelectInput";
import * as S from "./styled";
import { SelectInputProps } from "./types";

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
	(props, ref) => {
		const { choices, inputProps, floatingPanelProps, optionItem } =
			useSelectInput(props, ref);

		return (
			<S.SelectFloatingPanel
				{...floatingPanelProps}
				content={
					<S.OptionsList>
						{choices.map((choice, index) => (
							<S.OptionItem
								key={String(choice.value)}
								{...optionItem.getProps(choice, index)}
							/>
						))}
						{!choices.length && <S.EmptyChoices>Empty choices</S.EmptyChoices>}
					</S.OptionsList>
				}
			>
				<InputBase {...inputProps} />
			</S.SelectFloatingPanel>
		);
	}
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
