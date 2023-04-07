import { FC } from "react";

import * as S from "./styled";
import { ButtonColorVariants, ButtonProps, ButtonVariants } from "./types";

const Button: FC<ButtonProps> = ({
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

export default Button;
