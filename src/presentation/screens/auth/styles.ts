import { StyleSheet } from "react-native"
import { Theme } from "../../../shared/theme"

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    keyboardAvoid: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: theme.layout.screenPaddingHorizontal,
      paddingTop: theme.spacing.xxl,
      paddingBottom: theme.spacing.xl,
    },
    header: {
      marginBottom: theme.spacing.xxl,
      alignItems: "center",
    },
    subtitle: {
      marginTop: theme.spacing.sm,
    },
    form: {
      marginBottom: theme.spacing.lg,
    },
    inputContainer: {
      marginBottom: theme.spacing.md,
    },
    rememberMeContainer: {
      marginBottom: theme.spacing.xl,
    },

    signUpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    signUpLink: {
      marginLeft: theme.spacing.xs,
    },
  })
