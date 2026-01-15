import React from "react"
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "./Typography"

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "text" | "outlined"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  children: string | React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  style,
  ...touchableProps
}) => {
  const { theme } = useTheme()

  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case "small":
        return {
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.md,
          minHeight: 32,
        }
      case "large":
        return {
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          minHeight: 56,
        }
      case "medium":
      default:
        return {
          paddingVertical: 13,
          paddingHorizontal: theme.spacing.lg,
          minHeight: 40,
        }
    }
  }

  const getVariantStyles = (): { button: ViewStyle; text: TextStyle } => {
    const isDisabled = disabled || loading

    switch (variant) {
      case "secondary":
        return {
          button: {
            backgroundColor: isDisabled
              ? theme.colors.action.disabledBackground
              : theme.colors.secondary,
          },
          text: {
            color: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.secondaryContrast,
          },
        }
      case "text":
        return {
          button: {
            backgroundColor: "transparent",
          },
          text: {
            color: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.primary,
          },
        }
      case "outlined":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: isDisabled
              ? theme.colors.border.default
              : theme.colors.primary,
          },
          text: {
            color: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.primary,
          },
        }
      case "primary":
      default:
        return {
          button: {
            backgroundColor: isDisabled
              ? theme.colors.action.disabledBackground
              : theme.colors.primary,
          },
          text: {
            color: isDisabled
              ? theme.colors.text.disabled
              : theme.colors.primaryContrast,
          },
        }
    }
  }

  const sizeStyles = getSizeStyles()
  const variantStyles = getVariantStyles()

  const styles = StyleSheet.create({
    button: {
      borderRadius: theme.radius.md,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      ...sizeStyles,
      ...variantStyles.button,
      ...(fullWidth && { width: "100%" }),
    },
    text: variantStyles.text,
  })

  const getTextVariant = () => {
    switch (size) {
      case "small":
        return "labelMedium"
      case "large":
        return "labelLarge"
      default:
        return "labelLarge"
    }
  }

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...touchableProps}
    >
      {loading ? (
        <ActivityIndicator
          size='small'
          color={variantStyles.text.color as string}
        />
      ) : (
        <Typography variant={getTextVariant()} style={styles.text}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  )
}

export default Button
