import breakpoints, { BREAKPOINT } from "./breakpoints";

enum MEDIA_FUNCTION {
	up = "up",
	down = "down",
}

type MEDIA_FUNCTIONS = Record<MEDIA_FUNCTION, string>;
type MEDIA = Record<BREAKPOINT, MEDIA_FUNCTIONS>;

function generateMedia(): MEDIA {
	const up = (breakpointKey: BREAKPOINT) =>
		`@media (min-width: ${breakpoints[breakpointKey]}px)`;
	const down = (breakpointKey: BREAKPOINT) =>
		`@media (max-width: ${breakpoints[breakpointKey] - 1}px)`;

	const media: Partial<MEDIA> = {};

	for (const breakpointKey in breakpoints) {
		const typedBreakpointKey = breakpointKey as BREAKPOINT;

		media[typedBreakpointKey] = {
			up: up(typedBreakpointKey),
			down: down(typedBreakpointKey),
		};
	}

	return media as MEDIA;
}

const media: MEDIA = generateMedia();

export default media;
