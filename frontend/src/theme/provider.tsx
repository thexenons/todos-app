import { useAtomValue } from "jotai/react";
import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { activeThemeAtom } from "./state";

const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const activeTheme = useAtomValue(activeThemeAtom);

  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
