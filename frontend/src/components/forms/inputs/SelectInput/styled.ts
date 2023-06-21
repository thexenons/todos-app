import styled, { css } from "styled-components";

import FloatingPanel from "../../../layout/FloatingPanel";
import { FloatingPanelContent } from "../../../layout/FloatingPanel/styled";

export const SelectFloatingPanel = styled(FloatingPanel)`
	${FloatingPanelContent} {
		${({ theme }) => theme.mixins.padding({ all: 0 })}
	}
`;

export const OptionsList = styled.ul`
	list-style: none;
	${({ theme }) => theme.mixins.margin({ all: 0 })};
	${({ theme }) => theme.mixins.padding({ x: 0, y: theme.spacing(1) })};
`;

export const OptionItem = styled.li<{
	$isActive?: boolean;
	$isCurrent?: boolean;
}>`
	cursor: pointer;
	${({ theme }) =>
		theme.mixins.padding({ y: theme.spacing(0.5), x: theme.spacing(1) })}

	${({ $isCurrent }) =>
		$isCurrent &&
		css`
			font-weight: 900;
		`}

	${({ $isActive }) =>
		$isActive &&
		css`
			background: rgba(255, 255, 255, 0.5);
		`}
`;

export const EmptyChoices = styled.div`
	${({ theme }) =>
		theme.mixins.padding({ y: theme.spacing(0.5), x: theme.spacing(1) })}
`;
