import { css } from "styled-components";

const parseMargin = (margin: number | string) => {
  if (typeof margin === "string") return margin;

  return css`
    ${({ theme }) => theme.spacing(margin)}
  `;
};

interface MarginParams {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  all?: number | string;
  x?: number | string;
  y?: number | string;
}
const margin = ({ top, right, bottom, left, all, x, y }: MarginParams) =>
  all !== undefined
    ? css`
        margin: ${parseMargin(all)};
      `
    : css`
        ${y !== undefined
          ? css`
              margin-top: ${parseMargin(y)};
              margin-bottom: ${parseMargin(y)};
            `
          : css`
              ${top !== undefined ? `margin-top: ${parseMargin(top)};` : ""}
              ${bottom !== undefined
                ? `margin-bottom: ${parseMargin(bottom)};`
                : ""}
            `}
        ${x !== undefined
          ? css`
              margin-left: ${parseMargin(x)};
              margin-right: ${parseMargin(x)};
            `
          : css`
              ${right !== undefined
                ? `margin-right: ${parseMargin(right)};`
                : ""}
              ${left !== undefined ? `margin-left: ${parseMargin(left)};` : ""}
            `}
      `;

export default margin;
