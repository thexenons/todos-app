import styled from "styled-components";

export const ComponentsListWrapper = styled.div`
	${({ theme }) =>
		theme.mixins.flex({ direction: "column", gap: theme.spacing(2) })}
	height: 100%;
`;

export const ComponentsRowWrapper = styled.div`
	${({ theme }) => theme.mixins.flex({ gap: theme.spacing(2), wrap: true })}
`;

export const CenteredContent = styled.div`
	flex: 1 1 auto;
	${({ theme }) => theme.mixins.flex({ align: "center", justify: "center" })}
`;
