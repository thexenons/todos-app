import { css } from "styled-components";

const parseMargin = (margin: number | string) => {
	if (typeof margin === "string") return margin;

	return css`
		${({ theme }) => theme.spacing(margin)}
	`;
};

interface MarginParams {
	top?: number | string;
	right?: number | string;
	bottom?: number | string;
	left?: number | string;
	all?: number | string;
	x?: number | string;
	y?: number | string;
}
const margin = ({ top, right, bottom, left, x, y, all }: MarginParams) =>
	css`
		${all !== undefined
			? css`
					margin: ${parseMargin(all)};
			  `
			: ""}
		${x !== undefined
			? css`
					margin-right: ${parseMargin(x)};
					margin-left: ${parseMargin(x)};
			  `
			: ""}
		${y !== undefined
			? css`
					margin-top: ${parseMargin(y)};
					margin-bottom: ${parseMargin(y)};
			  `
			: ""}
		${top !== undefined
			? css`
					margin-top: ${parseMargin(top)};
			  `
			: ""}
		${right !== undefined
			? css`
					margin-right: ${parseMargin(right)};
			  `
			: ""}
		${bottom !== undefined
			? css`
					margin-bottom: ${parseMargin(bottom)};
			  `
			: ""}
		${left !== undefined
			? css`
					margin-left: ${parseMargin(left)};
			  `
			: ""}
	`;

export default margin;
