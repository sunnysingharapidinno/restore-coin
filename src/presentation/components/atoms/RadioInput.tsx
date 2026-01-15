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

interface RadioInputProps {
  label: string
  selected?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  error?: boolean
  size?: "small" | "medium" | "large"
  containerStyle?: ViewStyle
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  selected = false,
  onChange,
  disabled = false,
  error = false,
  size = "medium",
  containerStyle,
}) => {
  const { theme } = useTheme()
  const animatedScale = React.useRef(
    new Animated.Value(selected ? 1 : 0)
  ).current

  React.useEffect(() => {
    Animated.spring(animatedScale, {
      toValue: selected ? 1 : 0,
      useNativeDriver: true,
      speed: 20,
      bounciness: 10,
    }).start()
  }, [selected, animatedScale])

  const handlePress = () => {
    if (disabled || !onChange) return
    onChange(!selected)
  }

  const getSize = () => {
    switch (size) {
      case "small":
        return {
          outer: 16,
          inner: 8,
          spacing: theme.spacing.xs,
        }
      case "large":
        return {
          outer: 28,
          inner: 14,
          spacing: theme.spacing.md,
        }
      case "medium":
      default:
        return {
          outer: 16,
          inner: 8,
          spacing: theme.spacing.sm,
        }
    }
  }

  const dimensions = getSize()

  const getOuterColor = () => {
    if (disabled) return theme.colors.border.default
    if (error) return theme.colors.border.error
    if (selected) return theme.colors.primary
    return theme.colors.primary
  }

  const getInnerColor = () => {
    if (disabled) return theme.colors.text.disabled
    if (error) return theme.colors.error
    return theme.colors.primary
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
    radioOuter: {
      width: dimensions.outer,
      height: dimensions.outer,
      borderRadius: dimensions.outer / 2,
      borderWidth: 2,
      borderColor: getOuterColor(),
      alignItems: "center",
      justifyContent: "center",
      marginRight: dimensions.spacing,
    },
    radioInner: {
      width: dimensions.inner,
      height: dimensions.inner,
      borderRadius: dimensions.inner / 2,
      backgroundColor: getInnerColor(),
      transform: [{ scale: animatedScale }],
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
        <View style={styles.radioOuter}>
          <Animated.View style={styles.radioInner} />
        </View>

        <View style={styles.label}>
          <Typography
            variant={getLabelVariant()}
            color={disabled ? "disabled" : error ? "error" : "secondary"}
          >
            {label}
          </Typography>
        </View>
      </TouchableOpacity>
    </View>
  )
}

// Radio Group Component for managing multiple radio inputs
interface RadioGroupProps {
  value?: string | number
  onChange?: (value: string | number) => void
  disabled?: boolean
  error?: boolean
  size?: "small" | "medium" | "large"
  containerStyle?: ViewStyle
  options: Array<{
    value: string | number
    label: string
    disabled?: boolean
  }>
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  disabled = false,
  error = false,
  size = "medium",
  containerStyle,
  options,
}) => {
  return (
    <View style={containerStyle}>
      {options.map((option) => (
        <RadioInput
          key={option.value}
          label={option.label}
          selected={option.value === value}
          onChange={() => onChange?.(option.value)}
          disabled={disabled || option.disabled}
          error={error}
          size={size}
        />
      ))}
    </View>
  )
}

export default RadioInput
