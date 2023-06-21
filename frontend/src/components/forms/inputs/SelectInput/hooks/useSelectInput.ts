import {
	ChangeEvent,
	ForwardedRef,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useController, useFormContext } from "react-hook-form";
import { useBoolean, useOnClickOutside } from "usehooks-ts";

import { FloatingPanelProps } from "../../../../layout/FloatingPanel/types";
import { InputBaseProps } from "../../InputBase/types";
import { SelectInputChoice, SelectInputProps } from "../types";

const useSelectInput = (
	{ rules, name, defaultValue, choices, ...rest }: SelectInputProps,
	ref: ForwardedRef<HTMLInputElement>
) => {
	const { control } = useFormContext();
	const { field } = useController({
		name,
		control,
		rules,
		defaultValue: rest.value ?? defaultValue,
	});

	const inputRef = useRef<HTMLInputElement>();
	const handleRef = useCallback(
		(node: HTMLInputElement) => {
			field.ref(node);
			if (typeof ref === "function") {
				ref(node);
			}
			inputRef.current = node;
		},
		[field, ref]
	);

	const [inputValue, setInputValue] = useState<string>(
		field.value?.label ?? ""
	);
	const {
		value: isFiltering,
		setFalse: setIsNotFiltering,
		setTrue: setIsFiltering,
	} = useBoolean();
	const { value: isOpen, setFalse: close, setTrue: open } = useBoolean(false);

	// Update inputValue when field.value changes.
	useEffect(() => {
		if (field.value) {
			setInputValue(field.value?.label);
		} else {
			setInputValue("");
		}
		setIsNotFiltering();
	}, [field.value, setIsNotFiltering]);

	// Open panel when focus input.
	const onFocus = useCallback(() => {
		inputRef.current?.select();
		open();
	}, [open]);

	// Update inputValue when type on input.
	// If user clear input, clear value.
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const value = e.target.value;
			setInputValue(value ?? "");
			setIsFiltering();

			if (value === "") field.onChange(undefined);
		},
		[field, setIsFiltering]
	);

	// Update field.value when user selects an option.
	const selectOption = useCallback(
		(choice: SelectInputChoice) => () => {
			if (choice.value !== field.value?.value) {
				field.onChange(choice);
			}
			close();
			setIsNotFiltering();
			setInputValue(choice.label ?? "");
		},
		[close, field, setIsNotFiltering]
	);

	// Close panel when user clicks outside.
	const onClose = useCallback(() => {
		close();
		setIsNotFiltering();

		if (inputValue !== field.value?.label) {
			setInputValue(field.value?.label ?? "");
		}
	}, [close, field.value?.label, inputValue, setIsNotFiltering]);

	const popperRef = useRef<HTMLDivElement | null>(null);
	useOnClickOutside(popperRef, onClose);

	// Filter items from inputValue
	const filteredChoices = useMemo(() => {
		if (!isFiltering) return choices;

		return choices.filter((choice) =>
			choice.label.toLowerCase().includes(inputValue.toLowerCase())
		);
	}, [choices, inputValue, isFiltering]);

	// Manage active choice
	const [activeChoiceIndex, setActiveChoiceIndex] = useState<number>(0);

	useEffect(() => {
		const onKeyPress = (e: KeyboardEvent) => {
			const key = e.key;

			if (key === "ArrowDown") {
				e.preventDefault();
				setActiveChoiceIndex((currentActiveChoiceIndex) => {
					if (currentActiveChoiceIndex < filteredChoices.length - 1) {
						return currentActiveChoiceIndex + 1;
					}
					return 0;
				});
			}

			if (key === "ArrowUp") {
				e.preventDefault();
				setActiveChoiceIndex((currentActiveChoiceIndex) => {
					if (currentActiveChoiceIndex > 0) {
						return currentActiveChoiceIndex - 1;
					}
					return filteredChoices.length - 1;
				});
			}

			if (key === "Enter") {
				const activeChoice = filteredChoices[activeChoiceIndex];
				if (activeChoice) {
					selectOption(activeChoice)();
				}
			}

			if (key === "Enter" || key === "Escape") {
				inputRef.current?.blur();
				close();
				setActiveChoiceIndex(0);
			}
		};

		if (isOpen) {
			window.addEventListener("keydown", onKeyPress);
		}

		return () => {
			window.removeEventListener("keydown", onKeyPress);
		};
	}, [activeChoiceIndex, close, filteredChoices, isOpen, selectOption]);

	const handleOptionItemHover = useCallback(
		(index: number) => () => {
			if (index !== activeChoiceIndex) {
				setActiveChoiceIndex(index);
			}
		},
		[activeChoiceIndex]
	);

	return {
		choices: filteredChoices,
		inputProps: {
			...rest,
			...field,
			ref: handleRef,
			onFocus,
			onChange,
			value: inputValue,
		} as InputBaseProps,
		floatingPanelProps: {
			placement: "bottom",
			strategy: "click",
			isOpen,
			ref: popperRef,
		} as FloatingPanelProps,
		optionItem: {
			getProps: (choice: SelectInputChoice, index: number) => ({
				onClick: selectOption(choice),
				onMouseOver: handleOptionItemHover(index),
				$isActive: activeChoiceIndex === index,
				$isCurrent: choice.value === field.value?.value,
				children: choice.label,
			}),
		},
	};
};

export default useSelectInput;
