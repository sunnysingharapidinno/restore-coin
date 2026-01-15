import React, { ReactNode, useMemo } from "react"
import { View, StyleSheet, Platform, StyleProp, ViewStyle } from "react-native"
import { Theme } from "../../../shared/theme"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface CardWrapProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export const CardWrap: React.FC<CardWrapProps> = ({ children, style }) => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  return <View style={[styles.card, style]}>{children}</View>
}

export default CardWrap

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      padding: theme.spacing.md,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme?.colors?.border.navBorder,
      backgroundColor: theme?.colors?.cardBg,

      // iOS shadow (combined)
      shadowColor: theme?.colors?.text.inverse,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 10,

      // Android shadow
      elevation: Platform.OS === "android" ? 6 : 0,
    },
  })
