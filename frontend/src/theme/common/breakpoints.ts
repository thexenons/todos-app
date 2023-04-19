export enum BREAKPOINT {
	sm = "sm",
	md = "md",
	lg = "lg",
	xl = "xl",
}

export type BREAKPOINTS = Record<BREAKPOINT, number>;

const breakpoints: BREAKPOINTS = {
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536,
};

export default breakpoints;
