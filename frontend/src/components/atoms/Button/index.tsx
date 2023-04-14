import { FC } from "react";

import * as S from "./styled";
import { ButtonColorVariants, ButtonProps, ButtonVariants } from "./types";

const Button: FC<ButtonProps> = ({
	children,
	variant = ButtonVariants.contained,
	colorVariant = ButtonColorVariants.neutral,
	isRounded = false,
	leftIcon,
	rightIcon,
	...rest
}) => (
	<S.ButtonWrapper
		$variant={variant}
		$colorVariant={colorVariant}
		$isRounded={isRounded}
		{...rest}
	>
		{leftIcon && <S.ButtonIconsWrapper>{leftIcon}</S.ButtonIconsWrapper>}
		{children}
		{rightIcon && <S.ButtonIconsWrapper>{rightIcon}</S.ButtonIconsWrapper>}
	</S.ButtonWrapper>
);

export default Button;
