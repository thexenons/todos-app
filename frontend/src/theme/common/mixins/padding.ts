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

const padding = ({ top, right, bottom, left, x, y, all }: PaddingParams) =>
	css`
		${all !== undefined
			? css`
					padding: ${parsePadding(all)};
			  `
			: ""}
		${x !== undefined
			? css`
					padding-right: ${parsePadding(x)};
					padding-left: ${parsePadding(x)};
			  `
			: ""}
		${y !== undefined
			? css`
					padding-top: ${parsePadding(y)};
					padding-bottom: ${parsePadding(y)};
			  `
			: ""}
		${top !== undefined
			? css`
					padding-top: ${parsePadding(top)};
			  `
			: ""}
		${right !== undefined
			? css`
					padding-right: ${parsePadding(right)};
			  `
			: ""}
		${bottom !== undefined
			? css`
					padding-bottom: ${parsePadding(bottom)};
			  `
			: ""}
		${left !== undefined
			? css`
					padding-left: ${parsePadding(left)};
			  `
			: ""}
	`;

export default padding;
