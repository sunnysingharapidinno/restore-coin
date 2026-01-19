import React, { useState, useMemo } from "react"
import { StyleSheet, StatusBar } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated"
import { SplashStepComponent } from "./types"
import {
  SplashStepOne,
  SplashStepFive,
  SplashStepFour,
  SplashStepThree,
  SplashStepTwo,
} from "../../components/organisms/splash-steps"
import { Theme } from "../../../shared/theme"
import { useTheme } from "../../../shared/theme/ThemeContext"

const STEPS: SplashStepComponent[] = [
  SplashStepOne,
  SplashStepTwo,
  SplashStepThree,
  SplashStepFour,
  SplashStepFive,
]

interface SplashScreenProps {
  onFinish?: () => void
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState<number | null>(null)

  const { theme } = useTheme()
  const styles = useMemo(() => createStyles(theme), [theme])

  const currentOpacity = useSharedValue(1)
  const currentY = useSharedValue(0)

  const nextOpacity = useSharedValue(0)
  const nextY = useSharedValue(20)

  const currentStyle = useAnimatedStyle(() => ({
    opacity: currentOpacity.value,
    transform: [{ translateY: currentY.value }],
  }))

  const nextStyle = useAnimatedStyle(() => ({
    opacity: nextOpacity.value,
    transform: [{ translateY: nextY.value }],
  }))

  const goNext = () => {
    if (current === STEPS.length - 1) {
      onFinish?.()
      return
    }

    setNext(current + 1)

    // animate current out
    currentOpacity.value = withTiming(0, { duration: 250 })
    currentY.value = withTiming(-20, { duration: 300 })

    // animate next in
    nextOpacity.value = withTiming(1, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    })
    nextY.value = withTiming(
      0,
      { duration: 400, easing: Easing.out(Easing.cubic) },
      () => runOnJS(commitStep)()
    )
  }

  const commitStep = () => {
    setCurrent((c) => c + 1)
    setNext(null)

    // reset values
    currentOpacity.value = 1
    currentY.value = 0
    nextOpacity.value = 0
    nextY.value = 20
  }

  const CurrentStep = STEPS[current]
  const NextStep = next !== null ? STEPS[next] : null

  return (
    <Animated.View style={styles.container}>
      <StatusBar barStyle='light-content' />

      <Animated.View style={[styles.layer, currentStyle]}>
        <CurrentStep onNext={goNext} />
      </Animated.View>

      {NextStep && (
        <Animated.View style={[styles.layer, nextStyle]}>
          <NextStep onNext={() => {}} />
        </Animated.View>
      )}
    </Animated.View>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    layer: {
      ...StyleSheet.absoluteFillObject,
    },
  })
