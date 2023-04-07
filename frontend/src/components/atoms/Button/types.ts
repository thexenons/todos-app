import { ComponentPropsWithoutRef } from "react";

export enum ButtonVariants {
	text = "text",
	contained = "contained",
	outlined = "outlined",
}

export enum ButtonColorVariants {
	primary = "primary",
	secondary = "secondary",
	neutral = "neutral",
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	variant?: ButtonVariants;
	colorVariant?: ButtonColorVariants;
	isRounded?: boolean;
}
