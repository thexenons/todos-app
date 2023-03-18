import type { FC, PropsWithChildren } from "react";
import * as S from "./styled";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <S.ContainerWrapper>{children}</S.ContainerWrapper>
);

export default Container;
