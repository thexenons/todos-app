import { css } from "styled-components";
import type { BREAKPOINT } from "./common/breakpoints";

export function pxToRem(pxString: string | number) {
	let px = "";

	if (typeof pxString === "number") {
		px = pxString.toString();
	} else {
		px = pxString.split("px")[0];
	}

	const rem = parseInt(px) / 16;

	return `${rem}rem`;
}
type BreakpointsObjectProp = {
	[key in BREAKPOINT]?: string;
};
export function transformBreakpointsObjectPropToStyles(
	prop: BreakpointsObjectProp
): ReturnType<typeof css> {
	return css``;
}
