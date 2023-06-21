import { act, renderHook } from "@testing-library/react";
import { ChangeEvent, FC, FocusEvent, PropsWithChildren } from "react";
import { vi } from "vitest";

import Form from "../../../Form";
import { SelectInputProps } from "../types";
import useSelectInput from "./useSelectInput";

const choices = [
	{
		value: 1,
		label: "Opción 1",
	},
	{
		value: 2,
		label: "Opción 2",
	},
];
const props: SelectInputProps = {
	name: "select",
	choices,
};

const handleRef = vi.fn();

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
	<Form onSubmit={() => null}>
		<div data-testid="outside"></div>
		{children}
	</Form>
);

it("useSelectInput", () => {
	const { result } = renderHook(() => useSelectInput(props, handleRef), {
		wrapper: Wrapper,
	});

	expect(result.current.choices).toHaveLength(choices.length);

	expect(result.current.inputProps).toBeDefined();
	expect(result.current.inputProps.value).toBe("");
	expect(result.current.inputProps.onChange).toBeDefined();
	expect(result.current.inputProps.onFocus).toBeDefined();

	expect(result.current.floatingPanelProps).toBeDefined();
	expect(result.current.floatingPanelProps.isOpen).toBe(false);

	expect(result.current.optionItem).toBeDefined();
	expect(result.current.optionItem.getProps).toBeDefined();

	// Actions
	// Open floating panel
	act(() => {
		result.current.inputProps.onFocus?.({} as FocusEvent<HTMLInputElement>);
	});
	expect(result.current.floatingPanelProps.isOpen).toBe(true);

	// Write input value
	act(() => {
		result.current.inputProps.onChange?.({
			target: {
				value: "Test",
			},
		} as ChangeEvent<HTMLInputElement>);
	});
	expect(result.current.choices).toHaveLength(0);
	expect(result.current.inputProps.value).toBe("Test");

	act(() => {
		result.current.inputProps.onChange?.({
			target: {
				value: choices[0].label,
			},
		} as ChangeEvent<HTMLInputElement>);
	});
	expect(result.current.choices).toHaveLength(1);
	expect(result.current.inputProps.value).toBe(choices[0].label);

	act(() => {
		result.current.inputProps.onChange?.({
			target: {
				value: "",
			},
		} as ChangeEvent<HTMLInputElement>);
	});

	expect(result.current.choices).toHaveLength(choices.length);
	expect(result.current.inputProps.value).toBe("");

	// Select choice
	const choicesProps = choices.map((choice, index) =>
		result.current.optionItem.getProps(choice, index)
	);
	act(() => {
		choicesProps[0].onClick();
	});
	expect(result.current.inputProps.value).toBe(choices[0].label);
	expect(result.current.floatingPanelProps.isOpen).toBe(false);
});
