export const lightColors = {
  // Primary colors
  primary: "#21C45D",
  primaryLight: "#4DA2FF",
  primaryDark: "#0051D5",
  primaryContrast: "#FFFFFF",

  // Secondary colors
  secondary: "#5856D6",
  secondaryLight: "#8381FF",
  secondaryDark: "#2D2BA7",
  secondaryContrast: "#FFFFFF",

  // Semantic colors
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
  info: "#007AFF",

  // Neutral colors
  background: "#F5F5F5",
  surface: "#FFFFFF",
  surfaceVariant: "#F8F8F8",

  text: {
    primary: "#1C1C1E",
    secondary: "#636366",
    tertiary: "#8E8E93",
    disabled: "#C7C7CC",
    inverse: "#FFFFFF",
  },

  // Border colors
  border: {
    default: "#E5E5EA",
    focused: "#007AFF",
    error: "#FF3B30",
  },

  // Action colors
  action: {
    active: "#007AFF",
    hover: "rgba(0, 122, 255, 0.08)",
    selected: "rgba(0, 122, 255, 0.12)",
    disabled: "rgba(60, 60, 67, 0.18)",
    disabledBackground: "rgba(118, 118, 128, 0.12)",
  },

  cardBg: "#0E1115",
  cardSecondaryBg: "#0A0C0F",
  lineColor: "rgba(39, 44, 53, 0.30)",
  textboxBg: "#13161B",
  textboxBorder: "rgba(39, 44, 53, 0.50)",
}

export const darkColors = {
  // Primary colors
  primary: "#21C45D",
  primaryLight: "#5AC8FA",
  primaryDark: "#21242C",
  primaryContrast: "#FFFFFF",

  // Secondary colors
  secondary: "#5E5CE6",
  secondaryLight: "#8381FF",
  secondaryDark: "#080A0C",
  secondaryContrast: "#FFFFFF",

  // Semantic colors
  success: "#21C45D",
  warning: "#F59E0B",
  error: "#EF4343",
  info: "#0A84FF",

  // Neutral colors
  background: "#030E14",
  surface: "#1C1C1E",
  surfaceVariant: "#2C2C2E",

  text: {
    primary: "#FAFAFA",
    secondary: "#A6A6A6",
    tertiary: "#C7C7CC",
    disabled: "#636366",
    inverse: "#000000",
  },

  // Border colors
  border: {
    default: "#38383A",
    focused: "#0A84FF",
    error: "#EF4343",
    navBorder: "#272C35",
  },

  // Action colors
  action: {
    active: "#0A84FF",
    hover: "rgba(10, 132, 255, 0.08)",
    selected: "rgba(10, 132, 255, 0.12)",
    disabled: "rgba(235, 235, 245, 0.18)",
    disabledBackground: "rgba(118, 118, 128, 0.12)",
  },

  cardBg: "#0E1115",
  cardSecondaryBg: "#0A0C0F",
  lineColor: "rgba(39, 44, 53, 0.30)",
  textboxBg: "#13161B",
  textboxBorder: "rgba(39, 44, 53, 0.50)",
}

export type ColorScheme = typeof darkColors
