// import original module declarations
import "styled-components";
import { BaseTheme } from "./common/createTheme";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme extends BaseTheme {}
}
