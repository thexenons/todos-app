import styled from "styled-components";

export const ContainerWrapper = styled.div<{ $fullHeight?: boolean }>`
	width: 100%;

	max-width: ${({ theme }) => theme.components.layout.container.maxWidth}px;

	${({ theme }) => theme.mixins.padding({ y: 0, x: "var(--page-padding)" })}
	${({ theme }) => theme.mixins.margin({ y: 0, x: "auto" })}

	${({ $fullHeight }) => $fullHeight && "height: 100%;"}
`;
