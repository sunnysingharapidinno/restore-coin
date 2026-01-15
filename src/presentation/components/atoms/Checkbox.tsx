import React from "react"
import { View, Pressable, StyleSheet, ViewStyle } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "./Typography"

interface CheckboxProps {
  label: React.ReactNode
  helperText?: React.ReactNode
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  error?: boolean
  containerStyle?: ViewStyle
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  checked = false,
  onChange,
  disabled = false,
  error = false,
  containerStyle,
}) => {
  const { theme } = useTheme()

  const handleToggle = () => {
    if (!disabled) {
      onChange?.(!checked)
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: error
        ? theme.colors.border.error
        : checked
        ? theme.colors.primary
        : theme.colors.border.default,
      backgroundColor: checked ? theme.colors.primary : "transparent",
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.spacing.sm,
      opacity: disabled ? 0.5 : 1,
    },
    labelContainer: {
      flex: 1,
    },
    helperText: {
      marginTop: 4,
    },
  })

  return (
    <Pressable
      onPress={handleToggle}
      disabled={disabled}
      style={[styles.container, containerStyle]}>
      <View style={styles.checkbox}>
        {checked && (
          <MaterialIcons
            name='check'
            size={14}
            color={theme.colors.primaryContrast}
          />
        )}
      </View>

      <View style={styles.labelContainer}>
        <Typography
          variant='bodyMedium'
          color={disabled ? "disabled" : error ? "error" : "primary"}>
          {label}
        </Typography>

        {helperText && (
          <View style={styles.helperText}>
            <Typography
              variant='bodySmall'
              color={error ? "error" : "secondary"}>
              {helperText}
            </Typography>
          </View>
        )}
      </View>
    </Pressable>
  )
}

export default Checkbox
