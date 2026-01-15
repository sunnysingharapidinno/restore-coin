import React, { useMemo } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Theme } from "../../../shared/theme"
import { Typography } from "../../components/atoms"

interface PasswordStrengthProps {
  password: string
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  password,
}) => {
  const { theme } = useTheme()

  const checks = useMemo(() => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    }
  }, [password])

  const score = Object.values(checks).filter(Boolean).length

  const strength = useMemo(() => {
    if (score <= 2) return "Weak"
    if (score <= 4) return "Medium"
    return "Strong"
  }, [score])

  const strengthColor = {
    Weak: theme?.colors?.error,
    Medium: theme?.colors?.warning,
    Strong: theme?.colors?.primary,
  }[strength]

  const progressPercent = (score / 5) * 100

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Typography variant='labelLarge' color='secondary'>
          Password strength
        </Typography>
        <Typography variant='labelLarge' color={strengthColor}>
          {strength}
        </Typography>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${progressPercent}%`, backgroundColor: strengthColor },
          ]}
        />
      </View>

      {/* Checklist */}
      <Rule label='At least 8 characters' valid={checks.length} />
      <Rule label='One uppercase letter' valid={checks.uppercase} />
      <Rule label='One lowercase letter' valid={checks.lowercase} />
      <Rule label='One number' valid={checks.number} />
      <Rule label='One special character (!@#$%^&*)' valid={checks.special} />
    </View>
  )
}

const Rule = ({ label, valid }: { label: string; valid: boolean }) => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])
  return (
    <View style={styles.rule}>
      <Typography variant='labelLarge' color={valid ? "success" : "secondary"}>
        {valid ? "✓" : "✕"} {"  "} {label}
      </Typography>
    </View>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      marginTop: 8,
      marginBottom: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    progressTrack: {
      height: 6,
      borderRadius: 4,
      backgroundColor: theme?.colors?.primaryDark,
      overflow: "hidden",
      marginBottom: 12,
    },

    progressFill: {
      height: "100%",
      borderRadius: 4,
    },

    rule: {
      marginBottom: 4,
    },
  })
