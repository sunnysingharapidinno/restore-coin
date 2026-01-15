import React from "react"
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
  View,
} from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface IconButtonProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large"
  variant?: "default" | "contained" | "outlined"
  disabled?: boolean
  children: React.ReactNode // Icon component
  iconColor?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  size = "medium",
  variant = "default",
  disabled = false,
  children,
  iconColor,
  style,
  ...touchableProps
}) => {
  const { theme } = useTheme()

  const getSizeStyles = (): { container: ViewStyle; iconSize: number } => {
    switch (size) {
      case "small":
        return {
          container: {
            width: 32,
            height: 32,
            padding: theme.spacing.xs,
          },
          iconSize: 16,
        }
      case "large":
        return {
          container: {
            width: 40,
            height: 40,
            padding: theme.spacing.md,
          },
          iconSize: 20,
        }
      case "medium":
      default:
        return {
          container: {
            width: 36,
            height: 36,
            padding: theme.spacing.sm,
          },
          iconSize: 12,
        }
    }
  }

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case "contained":
        return {
          backgroundColor: disabled
            ? theme.colors.action.disabledBackground
            : theme.colors.primary,
        }
      case "outlined":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: disabled
            ? theme.colors.border.default
            : theme.colors.primary,
        }
      case "default":
      default:
        return {}
    }
  }

  const { container: sizeStyles, iconSize } = getSizeStyles()
  const variantStyles = getVariantStyles()

  const styles = StyleSheet.create({
    button: {
      ...sizeStyles,
      ...variantStyles,
      borderRadius: theme.radius.full,
      alignItems: "center",
      justifyContent: "center",
    },
    iconWrapper: {
      width: iconSize,
      height: iconSize,
      alignItems: "center",
      justifyContent: "center",
    },
  })

  const getIconColor = () => {
    if (iconColor) return iconColor

    if (disabled) return theme.colors.text.disabled

    if (variant === "contained") {
      return theme.colors.primaryContrast
    }

    return theme.colors.primary
  }

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      {...touchableProps}
    >
      <View style={styles.iconWrapper}>
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<any>, {
              width: iconSize,
              height: iconSize,
              color: getIconColor(),
              fill: getIconColor(),
            })
          : children}
      </View>
    </TouchableOpacity>
  )
}

export default IconButton
