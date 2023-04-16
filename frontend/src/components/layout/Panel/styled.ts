import styled from "styled-components";

export const PanelWrapper = styled.article`
	background-color: ${({ theme }) => theme.colors.background.paper};
	border-radius: ${({ theme }) => theme.spacing(2)};
	min-width: 300px;
	max-width: 600px;
	${({ theme }) => theme.mixins.flex({ direction: "column" })}
`;

export const PanelContent = styled.section`
	${({ theme }) => theme.mixins.padding({ all: 2 })}
	flex: 1 1 auto;
`;

export const PanelHeader = styled.header`
	${({ theme }) => theme.mixins.padding({ x: 2, top: 2 })}
`;

export const PanelFooter = styled.footer`
	${({ theme }) => theme.mixins.padding({ x: 2, bottom: 2 })}
`;
