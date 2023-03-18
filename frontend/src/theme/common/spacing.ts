import { pxToRem } from "../utils";

const baseSpacing = 8;

function spacing(...multipliers: number[]) {
  if (!multipliers?.length) multipliers = [1];
  const spacings = [];

  for (const multiplier of multipliers) {
    const spacing = baseSpacing * multiplier;

    if (spacing === 0) {
      spacings.push("0");
      continue;
    }

    spacings.push(`${pxToRem(baseSpacing * multiplier)} `);
  }

  return spacings.join(" ");
}

export default spacing;
