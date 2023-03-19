import { CSSProperties } from "react";
import { css } from "styled-components";

interface FlexParams {
	inline?: boolean;
	direction?: CSSProperties["flexDirection"];
	wrap?: boolean;
	justify?: CSSProperties["justifyContent"];
	align?: CSSProperties["alignItems"];
	gap?: string;
}
const flex = ({
	inline = false,
	direction,
	wrap,
	justify,
	align,
	gap,
}: FlexParams) => css`
	display: ${inline ? "inline-flex" : "flex"};
	${direction ? `flex-direction: ${direction};` : ""}
	${wrap !== undefined ? `flex-wrap: ${wrap ? "wrap" : "nowrap"};` : ""}
    ${justify ? `justify-content: ${justify};` : ""}
    ${align ? `align-items: ${align};` : ""}
    ${gap ? `gap: ${gap};` : ""}
`;

export default flex;
