import { css } from "styled-components";
import { TypographyStyles } from "../typography";

const typography = (variant: keyof TypographyStyles) => css`
	${({ theme }) =>
		theme.typography.getTypographyStyle(theme.typography[variant])}
`;

export default typography;
