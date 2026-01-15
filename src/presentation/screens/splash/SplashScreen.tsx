import React, { useEffect } from "react"
import { View, StyleSheet, Animated, Dimensions, StatusBar } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "../../components/atoms"

interface SplashScreenProps {
  onFinish?: () => void
}

const { width } = Dimensions.get("window")

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { theme } = useTheme()
  const fadeAnim = React.useRef(new Animated.Value(0)).current
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current

  useEffect(() => {
    // Animate logo entrance
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start()

    // Auto-transition after 2.5 seconds
    const timer = setTimeout(() => {
      onFinish?.()
    }, 2500)

    return () => clearTimeout(timer)
  }, [fadeAnim, scaleAnim, onFinish])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    logoContainer: {
      alignItems: "center",
      transform: [{ scale: scaleAnim }],
      opacity: fadeAnim,
    },
    logo: {
      width: width * 0.5,
      height: width * 0.5,
      backgroundColor: theme.colors.primaryContrast,
      borderRadius: theme.radius.xl,
      marginBottom: theme.spacing.xl,
      // Placeholder for actual logo
      justifyContent: "center",
      alignItems: "center",
    },
    logoText: {
      color: theme.colors.primary,
    },
    tagline: {
      marginTop: theme.spacing.md,
    },
  })

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.primary}
      />
      <View style={styles.container}>
        <Animated.View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Typography
              variant='displaySmall'
              style={styles.logoText}
              align='center'
            >
              RC
            </Typography>
          </View>
          <Typography variant='titleLarge' color='inverse' align='center'>
            Restore Coin
          </Typography>
          <Typography
            variant='bodyLarge'
            color='inverse'
            align='center'
            style={styles.tagline}
          >
            Your Digital Wallet
          </Typography>
        </Animated.View>
      </View>
    </>
  )
}

export default SplashScreen
