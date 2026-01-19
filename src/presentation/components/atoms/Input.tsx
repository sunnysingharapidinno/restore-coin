import React, { useMemo, useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Theme, typography } from "../../../shared/theme"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface InputProps extends Omit<TextInputProps, "secureTextEntry"> {
  label?: string
  startIcon?: React.ReactNode
  secureTextEntry?: boolean
  errorLabel?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  startIcon,
  secureTextEntry = false,
  errorLabel,
  style,
  keyboardType,
  onBlur,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const isPasswordField = secureTextEntry

  const { theme } = useTheme()
  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.wrapper}>
      {/* Label */}
      {label && (
        <Text style={[typography.bodyMedium, styles.label]}>{label}</Text>
      )}

      {/* Input wrapper */}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          Boolean(errorLabel) && styles.inputError, // error wins
        ]}
      >
        {/* Left Icon */}
        {startIcon && <View style={styles.leftIcon}>{startIcon}</View>}

        {/* TextInput */}
        <TextInput
          {...props}
          keyboardType={keyboardType}
          style={[
            styles.input,
            Boolean(startIcon) && styles.withLeftIcon,
            isPasswordField && styles.withRightIcon,
            style,
          ]}
          placeholderTextColor={theme?.colors?.text?.secondary}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false)
            onBlur?.(e)
          }}
        />

        {/* Password toggle */}
        {isPasswordField && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((p) => !p)}
            style={styles.rightIcon}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color={theme?.colors?.text?.secondary}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error text */}
      {errorLabel && <Text style={styles.errorText}>{errorLabel}</Text>}
    </View>
  )
}

export default Input

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      width: "100%",
    },

    label: {
      marginBottom: 12,
      color: theme.colors.text.primary,
    },

    inputContainer: {
      height: 40,
      borderRadius: 10,
      backgroundColor: theme.colors.textboxBg,
      borderWidth: 1,
      borderColor: theme.colors.textboxBorder,
      justifyContent: "center",
    },

    inputFocused: {
      borderColor: theme.colors.primary,
    },

    inputError: {
      borderColor: theme.colors.border.error, // 👈 highest priority
    },

    input: {
      height: "100%",
      paddingHorizontal: 16,
      color: theme.colors.primaryContrast,
      fontSize: 14,
    },

    withLeftIcon: {
      paddingLeft: 44,
    },

    withRightIcon: {
      paddingRight: 44,
    },

    leftIcon: {
      position: "absolute",
      left: 14,
      zIndex: 1,
    },

    rightIcon: {
      position: "absolute",
      right: 14,
      height: "100%",
      justifyContent: "center",
    },

    errorText: {
      marginTop: 6,
      color: theme.colors.error,
      fontSize: 12,
    },
  })
