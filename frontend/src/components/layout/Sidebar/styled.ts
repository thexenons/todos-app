import styled, { css } from "styled-components";

export const SidebarButton = styled.button`
	align-self: flex-end;
	display: block;
	appearance: none;
	background-color: ${({ theme }) => theme.colors.primary.light};
	color: ${({ theme }) => theme.colors.primary.dark};
	border: 1px solid ${({ theme }) => theme.colors.primary.main};
	border-radius: 100%;
	width: 24px;
	height: 24px;
`;

export const SidebarContentWrapper = styled.div`
	overflow: hidden;
	flex: 1 1 auto;
	transition: width 0.3s;
`;

export const SidebarContent = styled.div`
	${({ theme }) => theme.mixins.padding({ all: 2 })}
	height: 100%;
	${({ theme }) =>
		theme.mixins.flex({ direction: "column", gap: theme.spacing(2) })}
`;

export const SidebarWrapper = styled.aside<{ $isOpen: boolean }>`
	position: relative;
	${({ theme }) => theme.mixins.flex({ direction: "column" })}
	background-color: ${({ theme }) => theme.colors.background.paper};
	color: ${({ theme }) => theme.colors.text.primary};

	${({ $isOpen }) =>
		$isOpen
			? css`
					${SidebarContentWrapper} {
						width: 240px;
					}
			  `
			: css`
					${SidebarContentWrapper} {
						width: 0;
					}
			  `}
`;
