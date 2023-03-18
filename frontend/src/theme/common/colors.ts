const common = {
  black: "#000",
  white: "#fff",
};

interface ColorScheme {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

interface EnhancedColorScheme extends ColorScheme {
  main: string;
  light: string;
  dark: string;
}

const grey: ColorScheme = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

const indigo: ColorScheme = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe",
};

const teal: ColorScheme = {
  50: "#e0f2f1",
  100: "#b2dfdb",
  200: "#80cbc4",
  300: "#4db6ac",
  400: "#26a69a",
  500: "#009688",
  600: "#00897b",
  700: "#00796b",
  800: "#00695c",
  900: "#004d40",
  A100: "#a7ffeb",
  A200: "#64ffda",
  A400: "#1de9b6",
  A700: "#00bfa5",
};

function getColor(colorScheme: ColorScheme): EnhancedColorScheme {
  return {
    ...colorScheme,
    main: colorScheme[500],
    dark: colorScheme[900],
    light: colorScheme[100],
  };
}

const primary = getColor(indigo);

const secondary = getColor(teal);

const error = {
  main: "#f44336",
  light: "#e57373",
  dark: "#d32f2f",
  contrastText: "#fff",
};

const warning = {
  main: "#ffa726",
  light: "#ffb74d",
  dark: "#f57c00",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const info = {
  main: "#29b6f6",
  light: "#4fc3f7",
  dark: "#0288d1",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const success = {
  main: "#66bb6a",
  light: "#81c784",
  dark: "#388e3c",
  contrastText: "rgba(0, 0, 0, 0.87)",
};

const lightText = {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.54)",
  disabled: "rgba(0, 0, 0, 0.38)",
  hint: "rgba(0, 0, 0, 0.38)",
};
const darkText = {
  primary: common.white,
  secondary: "rgba(255, 255, 255, 0.7)",
  disabled: "rgba(255, 255, 255, 0.5)",
  hint: "rgba(255, 255, 255, 0.5)",
  icon: "rgba(255, 255, 255, 0.5)",
};

const divider = "rgba(255, 255, 255, 0.12)";

const background = {
  paper: "#242529",
  default: "#101011",
};

const action = {
  active: "#fff",
  hover: "rgba(255, 255, 255, 0.08)",
  hoverOpacity: 0.08,
  selected: "rgba(255, 255, 255, 0.16)",
  selectedOpacity: 0.16,
  disabled: "rgba(255, 255, 255, 0.3)",
  disabledBackground: "rgba(255, 255, 255, 0.12)",
  disabledOpacity: 0.38,
  focus: "rgba(255, 255, 255, 0.12)",
  focusOpacity: 0.12,
  activatedOpacity: 0.24,
};

function convertHexToRGB(color: string) {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length / 3}}`, "g");
  const colorsMatch = color.match(re);
  let colorsArray: string[] | undefined;

  if (colorsMatch && colorsMatch[0].length === 1) {
    colorsArray = colorsMatch.map((n) => n + n);
  }

  const colors = colorsArray || colorsMatch;

  return colors ? `rgb(${colors.map((n) => parseInt(n, 16)).join(", ")})` : "";
}

function decomposeColor(color: string): {
  type: string;
  values: number[];
} {
  if (color.charAt(0) === "#") {
    return decomposeColor(convertHexToRGB(color));
  }

  const marker = color.indexOf("(");
  const type = color.substring(0, marker);
  const strValues = color.substring(marker + 1, color.length - 1).split(",");
  const values = strValues.map((value) => parseFloat(value));

  return { type, values };
}

function getLuminance(color: string) {
  const decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf("rgb") !== -1) {
    const rgb = decomposedColor.values.map((val) => {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    // Truncate at 3 digits
    return Number(
      (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
    );
  }

  // else if (decomposedColor.type.indexOf('hsl') !== -1)
  return decomposedColor.values[2] / 100;
}

function getContrastRatio(foreground: string, background: string) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

function getContrastText(background: string, contrastThreshold = 3) {
  const contrastText =
    getContrastRatio(background, darkText.primary) >= contrastThreshold
      ? darkText.primary
      : lightText.primary;

  return contrastText;
}

const colors = {
  common,
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  grey,
  text: darkText,
  divider,
  background,
  action,
  getContrastText,
};

export default colors;
