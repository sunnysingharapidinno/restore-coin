import { StyleSheet } from "react-native"
import { Theme } from "../../../../shared/theme"

export const createBtnStyles = (theme: Theme) =>
  StyleSheet.create({
    arrowButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme?.colors?.border.greenBorder,
    },

    arrowIcon: {
      width: 32,
      height: 32,
      tintColor: theme?.colors?.primary,
    },
  })
