import styled from "styled-components";

export const ComponentsListWrapper = styled.div`
	${({ theme }) =>
		theme.mixins.flex({ direction: "column", gap: theme.spacing(2) })}
`;

export const ComponentsRowWrapper = styled.div`
	${({ theme }) => theme.mixins.flex({ gap: theme.spacing(2), wrap: true })}
`;
