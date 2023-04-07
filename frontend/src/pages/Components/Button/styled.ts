import styled from "styled-components";

export const ButtonListWrapper = styled.div`
	${({ theme }) =>
		theme.mixins.flex({ direction: "column", gap: theme.spacing(2) })}
`;

export const ButtonsWrapper = styled.div`
	${({ theme }) => theme.mixins.flex({ gap: theme.spacing(2) })}
`;
