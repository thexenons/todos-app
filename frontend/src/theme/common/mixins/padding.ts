import { css } from "styled-components";

export const pagePadding = "var(--page-padding)";

const parsePadding = (padding: number | string) => {
	if (typeof padding === "string") return padding;

	return css`
		${({ theme }) => theme.spacing(padding)}
	`;
};

interface PaddingParams {
	top?: number | string;
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
	all?: number | string;
	x?: number | string;
	y?: number | string;
}
const padding = ({ top, right, bottom, left, all, x, y }: PaddingParams) =>
	all !== undefined
		? css`
				padding: ${parsePadding(all)};
		  `
		: css`
				${y !== undefined
					? css`
							padding-top: ${parsePadding(y)};
							padding-bottom: ${parsePadding(y)};
					  `
					: css`
							${top !== undefined ? `padding-top: ${parsePadding(top)};` : ""}
							${bottom !== undefined
								? `padding-bottom: ${parsePadding(bottom)};`
								: ""}
					  `}
				${x !== undefined
					? css`
							padding-left: ${parsePadding(x)};
							padding-right: ${parsePadding(x)};
					  `
					: css`
							${right !== undefined
								? `padding-right: ${parsePadding(right)};`
								: ""}
							${left !== undefined
								? `padding-left: ${parsePadding(left)};`
								: ""}
					  `}
		  `;

export default padding;
