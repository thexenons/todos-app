// import original module declarations
import "styled-components";

import type { BaseTheme } from "./common/createTheme";

// and extend them!
declare module "styled-components" {
	export type DefaultTheme = BaseTheme;
}
