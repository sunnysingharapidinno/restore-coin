import { StyleSheet } from "react-native"
import { Theme } from "../../../../shared/theme"

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    form: {
      marginBottom: theme.spacing.lg,
    },
    inputContainer: {
      marginBottom: theme.spacing.md,
    },
    rememberMeContainer: {
      marginBottom: theme.spacing.xl,
    },
  })
