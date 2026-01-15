import { Platform } from "react-native"

export const fontFamily = {
  light: "SpaceGrotesk_300Light",
  regular: "SpaceGrotesk_400Regular",
  medium: "SpaceGrotesk_500Medium",
  semibold: "SpaceGrotesk_600SemiBold",
  bold: "SpaceGrotesk_700Bold",
} as const

export const typography = {
  // Display variants
  displayLarge: {
    fontFamily: fontFamily.bold,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
    fontWeight: "700" as const,
  },
  displayMedium: {
    fontFamily: fontFamily.bold,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
    fontWeight: "700" as const,
  },
  displaySmall: {
    fontFamily: fontFamily.semibold,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
    fontWeight: "600" as const,
  },

  // Headline variants
  headlineLarge: {
    fontFamily: fontFamily.semibold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
    fontWeight: "600" as const,
  },
  headlineMedium: {
    fontFamily: fontFamily.semibold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
    fontWeight: "600" as const,
  },
  headlineSmall: {
    fontFamily: fontFamily.medium,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
    fontWeight: "500" as const,
  },

  // Title variants
  titleLarge: {
    fontFamily: fontFamily.medium,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
    fontWeight: "500" as const,
  },
  titleMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500" as const,
  },
  titleSmall: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontWeight: "500" as const,
  },

  // Body variants
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontWeight: "400" as const,
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: "400" as const,
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontWeight: "400" as const,
  },

  // Label variants
  labelLarge: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontWeight: "500" as const,
  },
  labelMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontWeight: "500" as const,
  },
  labelSmall: {
    fontFamily: fontFamily.medium,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontWeight: "500" as const,
  },
} as const

export type Typography = typeof typography
export type TypographyVariant = keyof Typography
