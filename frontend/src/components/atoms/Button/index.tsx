import { FC } from "react";

import * as S from "./styled";
import { ButtonColorVariants, ButtonProps, ButtonVariants } from "./types";

const ButtonView: FC<ButtonProps> = ({
	children,
	variant = ButtonVariants.contained,
	colorVariant = ButtonColorVariants.neutral,
	isRounded = false,
	...rest
}) => (
	<S.ButtonWrapper
		$variant={variant}
		$colorVariant={colorVariant}
		$isRounded={isRounded}
		{...rest}
	>
		{children}
	</S.ButtonWrapper>
);

const Button = ButtonView as typeof ButtonView & {
	variants: typeof ButtonVariants;
	colorVariants: typeof ButtonColorVariants;
	Icon: typeof S.ButtonIconsWrapper;
};

Button.variants = ButtonVariants;
Button.colorVariants = ButtonColorVariants;
Button.Icon = S.ButtonIconsWrapper;

export default Button;
