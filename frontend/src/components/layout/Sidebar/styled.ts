import styled, { css } from "styled-components";

import Button from "../../atoms/Button";

export const SidebarButton = styled(Button)`
	align-self: flex-end;
	${({ theme }) => theme.mixins.margin({ all: 0.5 })}
`;

export const SidebarButtonContent = styled.span`
	transform: rotate(90deg);
	transition: transform 0.3s;

	${({ theme }) => theme.media.md.up} {
		transform: rotate(0deg);
	}
`;

export const SidebarContentWrapper = styled.div`
	overflow: hidden;
	flex: 1 1 auto;
	transition: height 0.3s, width 0.3s;
`;

export const SidebarContent = styled.div`
	${({ theme }) => theme.mixins.padding({ all: 2 })}
	${({ theme }) =>
		theme.mixins.flex({ direction: "column", gap: theme.spacing(2) })}
`;

export const SidebarWrapper = styled.aside<{
	$isOpen: boolean;
	$height: number;
}>`
	position: relative;
	${({ theme }) => theme.mixins.flex({ direction: "column" })}
	background-color: ${({ theme }) => theme.colors.background.paper};
	color: ${({ theme }) => theme.colors.text.primary};

	${({ $isOpen, $height }) =>
		$isOpen
			? css`
					${SidebarContentWrapper} {
						height: ${$height ? `${$height}px` : "auto"};
					}

					${SidebarButtonContent} {
						transform: rotate(-90deg);
					}
			  `
			: css`
					${SidebarContentWrapper} {
						height: 0px;
					}
			  `}

	${({ theme }) => theme.media.md.up} {
		${({ $isOpen }) =>
			$isOpen
				? css`
						${SidebarContentWrapper} {
							width: 240px;
						}

						${SidebarButtonContent} {
							transform: rotate(180deg);
						}
				  `
				: css`
						${SidebarContentWrapper} {
							width: 0px;
						}
				  `}
	}
`;
