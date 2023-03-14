import styled from "styled-components";

export const FooterWrapper = styled.footer`
	background-color: ${({ theme }) =>
		theme.components.layout.footer.backgroundColor};
	color: ${({ theme }) => theme.components.layout.footer.color};

	${({ theme }) => theme.mixins.padding({ y: 2 })}
	${({ theme }) =>
		theme.mixins.flex({ align: "center", justify: "space-between" })}
`;
