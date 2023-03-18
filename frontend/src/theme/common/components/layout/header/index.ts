import { rgba } from "polished";
import colors from "../../../colors";

const commonHeaderThemeProps = {
  backgroundColor: colors.primary.main,
  color: colors.getContrastText(colors.primary.main),
  boxShadow: `0 0 10px 0 ${rgba(colors.common.black, 0.1)}`,
};

export default commonHeaderThemeProps;
