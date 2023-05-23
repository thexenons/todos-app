import styled, { css } from "styled-components";

export const InputLabel = styled.label`
	position: absolute;
	top: ${({ theme }) => theme.spacing(2)};
	left: 0;
	pointer-events: none;
	white-space: nowrap;

	color: var(--input-base-color);
	transition: top 0.3s, color 0.3s, font-size 0.3s, letter-spacing 0.3s,
		line-height 0.3s;
	${({ theme }) => theme.mixins.typography("body1")}
`;

export const InputElement = styled.input<{
	$hasPlaceholder?: boolean;
	$hideBorderBottom?: boolean;
}>`
	${({ theme }) => theme.mixins.padding({ x: 0, y: 0.5 })}
	${({ theme }) => theme.mixins.margin({ top: 2 })}

	background-color: transparent;
	border: none;
	color: currentColor;
	transition: border-color 0.3s;
	width: 100%;

	${({ $hideBorderBottom }) =>
		!$hideBorderBottom && "border-bottom: 1px solid var(--input-base-color);"}

	&:focus-visible {
		outline: none;
	}

	&::placeholder {
		color: var(--input-base-default-color);
		opacity: 0.5;
	}

	&:disabled {
		opacity: 0.5;
	}

	&:disabled:hover {
		cursor: not-allowed;
	}

	&[data-has-placeholder="true"]
		+ ${InputLabel},
		&:focus-visible
		+ ${InputLabel},
		&:not(:placeholder-shown)
		+ ${InputLabel} {
		top: 0;
		${({ theme }) => theme.mixins.typography("body2")}
	}
`;

const inputWrapperVariants = {
	vertical: css``,
	horizontal: css`
		display: flex;
		${({ theme }) =>
			theme.mixins.flex({ align: "center", gap: theme.spacing() })}

		${InputLabel} {
			position: static;
			pointer-events: auto;
		}

		${InputElement} {
			${({ theme }) => theme.mixins.margin({ top: 0 })}
		}

		&:focus-within {
			--input-base-color: var(--input-base-default-color);
		}
	`,
};

export const InputWrapper = styled.div<{
	$minWidth?: number;
	$variant?: "vertical" | "horizontal";
}>`
	--input-base-default-color: ${({ theme }) => theme.colors.grey[400]};
	--input-base-accent-color: ${({ theme }) => theme.colors.primary.main};
	--input-base-color: var(--input-base-default-color);

	position: relative;

	&:focus-within {
		--input-base-color: var(--input-base-accent-color);
		& ${InputLabel} {
			pointer-events: auto;
		}
	}

	&[data-has-error="true"] {
		--input-base-default-color: ${({ theme }) => theme.colors.error.main};
	}

	${({ $minWidth }) => $minWidth && `min-width: ${$minWidth}px`}
	${({ $variant = "vertical" }) => inputWrapperVariants[$variant]}
`;
