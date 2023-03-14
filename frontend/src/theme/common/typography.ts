import { css } from "styled-components";
import { pxToRem } from "../utils";

const fontFamily = "Lato";

const fontSize = {
	xsmall: pxToRem(12),
	small: pxToRem(14),
	body: pxToRem(16),
	h6: pxToRem(20),
	h5: pxToRem(24),
	h4: pxToRem(34),
	h3: pxToRem(48),
	h2: pxToRem(60),
	h1: pxToRem(96),
};
const fontWeight = {
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700,
};
const lineHeight = {
	10: 1.167,
	20: 1.2,
	30: 1.235,
	40: 1.334,
	50: 1.43,
	60: 1.5,
	70: 1.57,
	80: 1.6,
	90: 1.66,
	100: 1.75,
	110: 2.66,
};
const letterSpacing = {
	10: "-0.01562em",
	20: "-0.00833em",
	30: "0em",
	40: "0.00714em",
	50: "0.00735em",
	60: "0.0075em",
	70: "0.00938em",
	80: "0.01071em",
	90: "0.02857em",
	100: "0.03333em",
	110: "0.08333em",
};

export interface TypographyStyle {
	fontWeight: number;
	fontSize: string;
	lineHeight: number;
	letterSpacing: string;
	textTransform?: string;
}

function getTypographyStyle(typographyStyle: TypographyStyle) {
	return css`
		font-weight: ${typographyStyle.fontWeight};
		font-size: ${typographyStyle.fontSize};
		line-height: ${typographyStyle.lineHeight};
		letter-spacing: ${typographyStyle.letterSpacing};
		${typographyStyle.textTransform
			? `text-transform: ${typographyStyle.textTransform}`
			: ""}
	`;
}

export interface TypographyStyles {
	h1: TypographyStyle;
	h2: TypographyStyle;
	h3: TypographyStyle;
	h4: TypographyStyle;
	h5: TypographyStyle;
	h6: TypographyStyle;
	subtitle1: TypographyStyle;
	subtitle2: TypographyStyle;
	body1: TypographyStyle;
	body2: TypographyStyle;
	button: TypographyStyle;
	caption: TypographyStyle;
	overline: TypographyStyle;
}

interface Typography extends TypographyStyles {
	pxToRem: typeof pxToRem;
	getTypographyStyle: typeof getTypographyStyle;
	fontFamily: typeof fontFamily;
	fontSize: typeof fontSize;
	fontWeight: typeof fontWeight;
	lineHeight: typeof lineHeight;
	letterSpacing: typeof letterSpacing;
}

const typography: Typography = {
	pxToRem,
	getTypographyStyle,
	fontFamily,
	fontSize,
	fontWeight,
	lineHeight,
	letterSpacing,
	h1: {
		fontWeight: fontWeight.light,
		fontSize: fontSize.h1,
		lineHeight: lineHeight[10],
		letterSpacing: letterSpacing[10],
	},
	h2: {
		fontWeight: fontWeight.light,
		fontSize: fontSize.h2,
		lineHeight: lineHeight[20],
		letterSpacing: letterSpacing[20],
	},
	h3: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.h3,
		lineHeight: lineHeight[10],
		letterSpacing: letterSpacing[30],
	},
	h4: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.h4,
		lineHeight: lineHeight[30],
		letterSpacing: letterSpacing[50],
	},
	h5: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.h5,
		lineHeight: lineHeight[40],
		letterSpacing: letterSpacing[30],
	},
	h6: {
		fontWeight: fontWeight.medium,
		fontSize: fontSize.h6,
		lineHeight: lineHeight[80],
		letterSpacing: letterSpacing[60],
	},
	subtitle1: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.body,
		lineHeight: lineHeight[100],
		letterSpacing: letterSpacing[70],
	},
	subtitle2: {
		fontWeight: fontWeight.medium,
		fontSize: fontSize.small,
		lineHeight: lineHeight[70],
		letterSpacing: letterSpacing[40],
	},
	body1: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.body,
		lineHeight: lineHeight[60],
		letterSpacing: letterSpacing[70],
	},
	body2: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.small,
		lineHeight: lineHeight[50],
		letterSpacing: letterSpacing[80],
	},
	button: {
		fontWeight: fontWeight.medium,
		fontSize: fontSize.small,
		lineHeight: lineHeight[100],
		letterSpacing: letterSpacing[90],
		textTransform: "uppercase",
	},
	caption: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.xsmall,
		lineHeight: lineHeight[90],
		letterSpacing: letterSpacing[100],
	},
	overline: {
		fontWeight: fontWeight.regular,
		fontSize: fontSize.xsmall,
		lineHeight: lineHeight[110],
		letterSpacing: letterSpacing[110],
		textTransform: "uppercase",
	},
};

export default typography;
