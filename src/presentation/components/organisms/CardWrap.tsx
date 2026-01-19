import React, { ReactNode, useMemo } from "react"
import {
  View,
  StyleSheet,
  Platform,
  StyleProp,
  ViewStyle,
  ColorValue,
} from "react-native"
import { Theme } from "../../../shared/theme"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient"

interface CardWrapProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
  gradientConfig?: {
    colors: readonly [ColorValue, ColorValue, ...ColorValue[]]
    start?: LinearGradientPoint
    end?: LinearGradientPoint
    locations?: [number, number, ...number[]]
  }
}

export const CardWrap: React.FC<CardWrapProps> = ({
  children,
  style,
  gradientConfig,
}) => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  if (gradientConfig?.colors) {
    return (
      <LinearGradient
        colors={gradientConfig?.colors}
        start={gradientConfig?.start}
        end={gradientConfig?.end}
        locations={gradientConfig?.locations}
        style={[styles.card, style]}
      >
        {children}
      </LinearGradient>
    )
  }

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
