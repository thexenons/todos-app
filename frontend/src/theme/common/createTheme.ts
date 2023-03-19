import deepmerge from "deepmerge";

import breakpoints from "./breakpoints";
import colors from "./colors";
import components from "./components";
import media from "./media";
import * as mixins from "./mixins";
import shadows from "./shadows";
import spacing from "./spacing";
import typography from "./typography";
import zIndex from "./zIndex";

const baseTheme = {
	components,
	breakpoints,
	colors,
	media,
	shadows,
	spacing,
	typography,
	zIndex,
	mixins,
};
export type BaseTheme = typeof baseTheme;

function createTheme(overrides: Partial<BaseTheme> = {}) {
	return deepmerge(baseTheme, overrides);
}
export default createTheme;
