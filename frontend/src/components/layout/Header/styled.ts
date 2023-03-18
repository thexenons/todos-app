import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;

  background-color: ${({ theme }) =>
    theme.components.layout.header.backgroundColor};
  color: ${({ theme }) => theme.components.layout.header.color};
  box-shadow: ${({ theme }) => theme.components.layout.header.boxShadow};

  ${({ theme }) => theme.mixins.padding({ y: 2 })}
  ${({ theme }) =>
    theme.mixins.flex({ align: "center", justify: "space-between" })}
`;
