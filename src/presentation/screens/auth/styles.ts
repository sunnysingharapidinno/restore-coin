import { StyleSheet } from "react-native"
import { Theme } from "../../../shared/theme"

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    signUpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    signUpLink: {
      marginLeft: theme.spacing.xs,
    },
  })
