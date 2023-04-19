import { rgba } from "polished";
import styled, { css } from "styled-components";

import { ButtonColorVariants, ButtonVariants } from "./types";

const buttonVariants: Record<
	keyof typeof ButtonVariants,
	ReturnType<typeof css>
> = {
	text: css`
		color: var(--button-color-main);
		background: transparent;
		border-color: transparent;

		&:hover {
			background: var(--button-color-light-opacified);
		}

		&:disabled {
			background: transparent;
		}
	`,
	contained: css`
		color: var(--button-color-main-text);
		background: var(--button-color-main);
		border-color: var(--button-color-main);

		&:hover {
			color: var(--button-color-dark-text);
			background: var(--button-color-dark);
			border-color: var(--button-color-dark);
		}

		&:disabled {
			color: var(--button-color-main-text);
			background: var(--button-color-main);
			border-color: var(--button-color-main);
		}
	`,
	outlined: css`
		background: transparent;
		color: var(--button-color-main);
		border-color: var(--button-color-light);

		&:hover {
			background: var(--button-color-light-opacified);
			border-color: var(--button-color-main);
		}

		&:disabled {
			background: transparent;
			border-color: var(--button-color-light);
		}
	`,
};

const buttonWrapperVariants: Record<
	keyof typeof ButtonColorVariants,
	ReturnType<typeof css>
> = {
	[ButtonColorVariants.primary]: css`
		--button-color-light-opacified: ${({ theme }) =>
			rgba(theme.colors.primary.light, 0.1)};
		--button-color-light: ${({ theme }) => theme.colors.primary.light};
		--button-color-light-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.primary.light)};
		--button-color-main: ${({ theme }) => theme.colors.primary.main};
		--button-color-main-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.primary.main)};
		--button-color-dark: ${({ theme }) => theme.colors.primary.dark};
		--button-color-dark-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.primary.dark)};
	`,
	[ButtonColorVariants.secondary]: css`
		--button-color-light-opacified: ${({ theme }) =>
			rgba(theme.colors.secondary.light, 0.1)};
		--button-color-light: ${({ theme }) => theme.colors.secondary.light};
		--button-color-light-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.secondary.light)};
		--button-color-main: ${({ theme }) => theme.colors.secondary.main};
		--button-color-main-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.secondary.main)};
		--button-color-dark: ${({ theme }) => theme.colors.secondary.dark};
		--button-color-dark-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.secondary.dark)};
	`,
	[ButtonColorVariants.neutral]: css`
		--button-color-light-opacified: ${({ theme }) =>
			rgba(theme.colors.grey.light, 0.1)};
		--button-color-light: ${({ theme }) => theme.colors.grey.light};
		--button-color-light-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.grey.light)};
		--button-color-main: ${({ theme }) => theme.colors.grey.main};
		--button-color-main-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.grey.main)};
		--button-color-dark: ${({ theme }) => theme.colors.grey.dark};
		--button-color-dark-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.grey.dark)};
	`,
	[ButtonColorVariants.error]: css`
		--button-color-light-opacified: ${({ theme }) =>
			rgba(theme.colors.error.light, 0.1)};
		--button-color-light: ${({ theme }) => theme.colors.error.light};
		--button-color-light-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.error.light)};
		--button-color-main: ${({ theme }) => theme.colors.error.main};
		--button-color-main-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.error.main)};
		--button-color-dark: ${({ theme }) => theme.colors.error.dark};
		--button-color-dark-text: ${({ theme }) =>
			theme.colors.getContrastText(theme.colors.error.dark)};
	`,
};

export const ButtonWrapper = styled.button<{
	$variant?: keyof typeof ButtonVariants;
	$colorVariant?: keyof typeof ButtonColorVariants;
	$isRounded?: boolean;
}>`
	--button-size: 36px;
	appearance: none;
	border: 1px solid transparent;
	min-height: var(--button-size);
	min-width: var(--button-size);
	${({ theme }) =>
		theme.mixins.flex({
			inline: true,
			align: "center",
			justify: "center",
			gap: theme.spacing(),
		})}
	${({ theme }) => theme.mixins.padding({ x: 1 })}
	${({ theme }) => theme.typography.getTypographyStyle(theme.typography.button)}
	transition: background 0.3s, color 0.3s, border-color 0.3s;
	border-radius: ${({ $isRounded, theme }) =>
		$isRounded ? "calc(var(--button-size) / 2)" : theme.spacing(0.5)};
	cursor: pointer;

	${({ $colorVariant = ButtonColorVariants.neutral }) =>
		buttonWrapperVariants[$colorVariant]}
	${({ $variant = ButtonVariants.contained }) => buttonVariants[$variant]};

	&:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`;

export const ButtonIconsWrapper = styled.span`
	${({ theme }) =>
		theme.mixins.flex({
			inline: true,
			justify: "center",
			align: "center",
			gap: theme.spacing(),
		})}
`;
