import styled, { css } from "styled-components";

import { BREAKPOINT } from "../../../theme/common/breakpoints";
import Button from "../../atoms/Button";
import { ModalProps } from "./types";

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const ModalWrapper = styled.div<{
	$maxWidth: ModalProps["maxWidth"];
	$fullWidth: ModalProps["fullWidth"];
}>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: ${({ theme }) => theme.zIndex.modal};
	color: ${({ theme }) => theme.colors.text.primary};
	background-color: ${({ theme }) => theme.colors.background.paper};
	${({ theme }) => theme.mixins.flex({ direction: "column" })}
	box-shadow: ${({ theme }) =>
		`${theme.spacing(0.5)} ${theme.spacing(1)} ${theme.spacing(
			3
		)} rgba(0,0,0,0.4)`};

	${({ $fullWidth }) =>
		$fullWidth &&
		css`
			width: 100%;
			height: 100%;
		`}

	max-width: ${({ theme, $maxWidth = BREAKPOINT.xl }) =>
		`${theme.breakpoints[$maxWidth]}px`};

	${({ theme }) => theme.media.md.up} {
		min-width: 300px;
		height: auto;
		width: ${({ theme, $fullWidth }) =>
			$fullWidth ? `calc(100% - ${theme.spacing(4)})` : "auto"};
		border-radius: ${({ theme }) => theme.spacing(2)};
	}
`;

export const ModalContent = styled.div`
	${({ theme }) => theme.mixins.padding({ all: 2 })}
	flex: 1 1 auto;
`;

export const ModalHeader = styled.div`
	${({ theme }) =>
		theme.mixins.flex({
			align: "center",
			justify: "space-between",
			gap: theme.spacing(2),
		})}
	${({ theme }) => theme.mixins.padding({ x: 2, top: 2 })}
`;

export const ModalTitle = styled.h6`
	${({ theme }) => theme.mixins.typography("h6")}
	margin: 0;
`;

export const ModalCloseButton = styled(Button)`
	margin-left: auto;
`;

export const ModalFooter = styled.div`
	${({ theme }) =>
		theme.mixins.flex({
			align: "center",
			justify: "center",
			gap: theme.spacing(2),
		})}
	${({ theme }) => theme.mixins.padding({ x: 2, bottom: 2 })}
`;
