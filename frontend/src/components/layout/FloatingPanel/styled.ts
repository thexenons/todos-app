import styled from "styled-components";

export const FloatingPanelArrow = styled.div`
	position: absolute;
	width: var(--floating-panel-arrow-size);
	height: var(--floating-panel-arrow-size);
`;

export const FloatingPanelWrapper = styled.div`
	--floating-panel-background: ${({ theme }) => theme.colors.background.paper};
	--floating-panel-arrow-size: ${({ theme }) => theme.spacing(1)};
	--floating-panel-arrow-position: 1px;
	--floating-panel-padding: var(--floating-panel-arrow-size);

	z-index: ${({ theme }) => theme.zIndex.tooltip};
	filter: ${({ theme }) =>
		`drop-shadow(${theme.spacing(0.5)} ${theme.spacing(1)} ${theme.spacing(
			3
		)} rgba(0,0,0,0.4))`};

	&[data-popper-placement^="top"] {
		padding-bottom: var(--floating-panel-padding);

		${FloatingPanelArrow} {
			bottom: var(--floating-panel-arrow-position);
			border-left: var(--floating-panel-arrow-size) solid transparent;
			border-right: var(--floating-panel-arrow-size) solid transparent;
			border-top: var(--floating-panel-arrow-size) solid
				var(--floating-panel-background);
		}
	}

	&[data-popper-placement^="bottom"] {
		padding-top: var(--floating-panel-arrow-size);

		${FloatingPanelArrow} {
			top: var(--floating-panel-arrow-position);
			border-left: var(--floating-panel-arrow-size) solid transparent;
			border-right: var(--floating-panel-arrow-size) solid transparent;
			border-bottom: var(--floating-panel-arrow-size) solid
				var(--floating-panel-background);
		}
	}

	&[data-popper-placement^="left"] {
		padding-right: var(--floating-panel-arrow-size);

		${FloatingPanelArrow} {
			right: var(--floating-panel-arrow-position);
			border-top: var(--floating-panel-arrow-size) solid transparent;
			border-bottom: var(--floating-panel-arrow-size) solid transparent;
			border-left: var(--floating-panel-arrow-size) solid
				var(--floating-panel-background);
		}
	}

	&[data-popper-placement^="right"] {
		padding-left: var(--floating-panel-arrow-size);

		${FloatingPanelArrow} {
			left: var(--floating-panel-arrow-position);
			border-top: var(--floating-panel-arrow-size) solid transparent;
			border-bottom: var(--floating-panel-arrow-size) solid transparent;
			border-right: var(--floating-panel-arrow-size) solid
				var(--floating-panel-background);
		}
	}
`;

export const FloatingPanelContent = styled.div`
	background-color: var(--floating-panel-background);
	${({ theme }) => theme.mixins.padding({ all: 1 })}
	border-radius: ${({ theme }) => theme.spacing(0.5)};
`;
