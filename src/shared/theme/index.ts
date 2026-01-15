import { lightColors, darkColors, ColorScheme } from "./colors"
import { spacing, radius, layout, Spacing, Radius, Layout } from "./spacing"
import { typography, Typography } from "./typography"

export interface Theme {
  colors: ColorScheme
  spacing: Spacing
  radius: Radius
  layout: Layout
  typography: Typography
  isDark: boolean
}

export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  radius,
  layout,
  typography,
  isDark: false,
}

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  radius,
  layout,
  typography,
  isDark: true,
}

export { spacing, radius, layout, typography }
export type { TypographyVariant } from "./typography"
