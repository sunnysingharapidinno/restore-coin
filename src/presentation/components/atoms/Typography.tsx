import React from "react"
import { Text, TextProps, StyleSheet } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { TypographyVariant } from "../../../shared/theme"

interface TypographyProps extends Omit<TextProps, "style"> {
  variant?: TypographyVariant
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "disabled"
    | "error"
    | "success"
    | "warning"
    | "inverse"
    | string
  align?: "left" | "center" | "right" | "justify"
  style?: TextProps["style"]
  children: React.ReactNode
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "bodyMedium",
  color = "primary",
  align = "left",
  style,
  children,
  ...textProps
}) => {
  const { theme } = useTheme()

  const getTextColor = () => {
    switch (color) {
      case "primary":
        return theme.colors.text.primary
      case "secondary":
        return theme.colors.text.secondary
      case "tertiary":
        return theme.colors.text.tertiary
      case "disabled":
        return theme.colors.text.disabled
      case "error":
        return theme.colors.error
      case "success":
        return theme.colors.success
      case "warning":
        return theme.colors.warning
      case "inverse":
        return theme.colors.text.inverse
      default:
        return color ?? theme.colors.text.primary
    }
  }

  const styles = StyleSheet.create({
    text: {
      ...theme.typography[variant],
      color: getTextColor(),
      textAlign: align,
    },
  })

  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  )
}

export default Typography
