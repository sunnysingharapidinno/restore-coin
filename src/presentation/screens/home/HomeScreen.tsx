import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography, Button } from "../../components/atoms"
import { ScreenLayout } from "../../components/organisms"
import { useAuth } from "../../../state/contexts/AuthContext"
import { HomeScreenProps } from "../../navigation/types"

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { theme, toggleTheme } = useTheme()
  const { signOut } = useAuth()

  const handleLogout = () => {
    signOut()
  }

  const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: theme.layout.screenPaddingHorizontal,
    },
    welcomeSection: {
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.xxl,
    },
    subtitle: {
      marginTop: theme.spacing.sm,
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radius.lg,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.md,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardTitle: {
      marginBottom: theme.spacing.sm,
    },
    actions: {
      marginTop: theme.spacing.xl,
    },
    actionButton: {
      marginBottom: theme.spacing.md,
    },
    themeButton: {
      marginTop: theme.spacing.lg,
    },
  })

  const currentTheme = theme.isDark ? "Dark" : "Light"

  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeSection}>
          <Typography variant='displaySmall'>Welcome Back!</Typography>
          <Typography
            variant='bodyLarge'
            color='secondary'
            style={styles.subtitle}
          >
            Your digital wallet at your fingertips
          </Typography>
        </View>

        <View style={styles.card}>
          <Typography variant='titleLarge' style={styles.cardTitle}>
            Wallet Balance
          </Typography>
          <Typography variant='headlineLarge' color='primary'>
            $0.00
          </Typography>
          <Typography variant='bodyMedium' color='secondary'>
            Available balance
          </Typography>
        </View>

        <View style={styles.card}>
          <Typography variant='titleLarge' style={styles.cardTitle}>
            Recent Activity
          </Typography>
          <Typography variant='bodyMedium' color='secondary'>
            No recent transactions
          </Typography>
        </View>

        <View style={styles.actions}>
          <Button
            variant='primary'
            size='large'
            fullWidth
            onPress={() => {}}
            style={styles.actionButton}
          >
            Send Money
          </Button>

          <Button
            variant='secondary'
            size='large'
            fullWidth
            onPress={() => {}}
            style={styles.actionButton}
          >
            Receive Money
          </Button>

          <Button
            variant='outlined'
            size='medium'
            fullWidth
            onPress={toggleTheme}
            style={styles.themeButton}
          >
            {`Toggle Theme (${currentTheme})`}
          </Button>

          <Button
            variant='text'
            size='medium'
            fullWidth
            onPress={handleLogout}
            style={styles.themeButton}
          >
            Log Out
          </Button>
        </View>
      </ScrollView>
    </ScreenLayout>
  )
}

export default HomeScreen
