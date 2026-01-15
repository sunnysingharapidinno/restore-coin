import React, { ReactNode, useMemo, useState } from "react"
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native"
import { Typography } from "../../components/atoms"
import { ScreenLayout } from "./ScreenLayout"

import { Theme } from "../../../shared/theme"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface PageLayoutWrapProps {
  children: ReactNode
  heading: string
  subHeading?: string
  showDrawerMenu?: boolean
  showWallet?: boolean
}

export const PageLayoutWrap: React.FC<PageLayoutWrapProps> = ({
  children,
  heading,
  subHeading,
  showDrawerMenu,
  showWallet,
}) => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <ScreenLayout showDrawerMenu={showDrawerMenu} showWallet={showWallet}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'>
          <View style={styles.content}>
            <View style={styles.header}>
              <Typography variant='headlineLarge'>{heading}</Typography>
              <Typography
                variant='bodyLarge'
                color='secondary'
                style={styles.subtitle}>
                {subHeading}
              </Typography>
            </View>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}

export default PageLayoutWrap

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
      textAlign: "center",
    },
  })
