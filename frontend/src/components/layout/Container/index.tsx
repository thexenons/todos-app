import type { FC } from "react";

import * as S from "./styled";
import { ContainerProps } from "./types";

const Container: FC<ContainerProps> = ({ fullHeight, children }) => (
	<S.ContainerWrapper $fullHeight={fullHeight}>{children}</S.ContainerWrapper>
);

export default Container;
