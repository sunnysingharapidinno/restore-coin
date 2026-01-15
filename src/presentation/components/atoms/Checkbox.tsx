import React from "react"
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  Animated,
} from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "./Typography"

interface CheckboxProps {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  error?: boolean
  size?: "small" | "medium" | "large"
  containerStyle?: ViewStyle
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  error = false,
  size = "medium",
  containerStyle,
}) => {
  const { theme } = useTheme()
  const animatedScale = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.spring(animatedScale, {
      toValue: checked ? 1 : 0,
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start()
  }, [checked, animatedScale])

  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(!checked)
    }
  }

  const getSize = () => {
    switch (size) {
      case "small":
        return {
          box: 16,
          check: 10,
          spacing: theme.spacing.xs,
        }
      case "large":
        return {
          box: 28,
          check: 18,
          spacing: theme.spacing.md,
        }
      case "medium":
      default:
        return {
          box: 22,
          check: 14,
          spacing: theme.spacing.sm,
        }
    }
  }

  const dimensions = getSize()

  const getBoxColor = () => {
    if (disabled) return theme.colors.action.disabledBackground
    if (error) return theme.colors.error
    if (checked) return theme.colors.primary
    return "transparent"
  }

  const getBorderColor = () => {
    if (disabled) return theme.colors.border.default
    if (error) return theme.colors.border.error
    if (checked) return theme.colors.primary
    return theme.colors.text.secondary
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: theme.spacing.xs,
    },
    touchable: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      width: dimensions.box,
      height: dimensions.box,
      borderRadius: theme.radius.sm,
      borderWidth: 2,
      borderColor: getBorderColor(),
      backgroundColor: getBoxColor(),
      alignItems: "center",
      justifyContent: "center",
      marginRight: dimensions.spacing,
    },
    checkmark: {
      width: dimensions.check,
      height: dimensions.check,
    },
    checkmarkPath: {
      position: "absolute",
      width: dimensions.check,
      height: dimensions.check * 0.6,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderColor: checked ? theme.colors.primaryContrast : "transparent",
      transform: [
        { rotate: "-45deg" },
        { translateY: -dimensions.check * 0.1 },
        { scale: animatedScale },
      ],
    },
    label: {
      flex: 1,
    },
  })

  const getLabelVariant = () => {
    switch (size) {
      case "small":
        return "bodySmall"
      case "large":
        return "bodyLarge"
      default:
        return "bodyMedium"
    }
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <View style={styles.checkbox}>
          <Animated.View style={styles.checkmarkPath} />
        </View>

        <View style={styles.label}>
          <Typography
            variant={getLabelVariant()}
            color={disabled ? "disabled" : error ? "error" : "primary"}
          >
            {label}
          </Typography>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Checkbox
