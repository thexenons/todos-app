import styled, { css } from "styled-components";

export const Main = styled.main`
	${({ theme }) => theme.mixins.padding({ y: 2 })}
`;

export const MenuList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const MenuItem = styled.li<{ $isActive: boolean }>`
	a {
		display: block;
		${({ theme }) => theme.mixins.padding({ all: 2 })}
		${({ theme }) => theme.mixins.margin({ x: -2 })}
		color: ${({ theme }) => theme.colors.text.primary};
		transition: background-color 0.3s, color 0.3s;
		text-decoration: none;

		${({ $isActive, theme }) =>
			$isActive
				? css`
						background-color: ${theme.colors.grey.main};
						color: ${theme.colors.getContrastText(theme.colors.text.primary)};
				  `
				: ""}

		&:hover {
			background-color: ${({ theme }) => theme.colors.grey.main};
			color: ${({ theme }) =>
				theme.colors.getContrastText(theme.colors.grey.main)};
		}
	}
`;
