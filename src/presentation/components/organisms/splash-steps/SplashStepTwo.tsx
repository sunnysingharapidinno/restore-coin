import React, { useMemo } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native"
import { SplashStepProps } from "../../../screens/splash/types"
import { IconButton, Typography } from "../../atoms"
import AppIcons from "../../../../assets/icons/AppIcons"
import { createBtnStyles } from "./style"
import { useTheme } from "../../../../shared/theme/ThemeContext"
import AppImages from "../../../../assets/images/AppImages"

export const SplashStepTwo: React.FC<SplashStepProps> = ({ onNext }) => {
  const { theme } = useTheme()
  const btnStyles = useMemo(() => createBtnStyles(theme), [theme])
  return (
    <ImageBackground source={AppImages.splash2} style={styles.container}>
      <View>
        <Typography style={{ fontWeight: "500" }} variant='bodyLarge'>
          Our Mission
        </Typography>

        <Typography style={{ marginTop: 20 }} variant='displayLarge'>
          Sustainable{"\n"}Innovation
        </Typography>

        <Typography
          variant='titleMedium'
          style={{ lineHeight: 28, fontWeight: 500 }}>
          Driving real-world impact through blockchain-backed initiatives
          focused on environmental restoration and responsible innovation.
        </Typography>
      </View>

      <IconButton
        size='large'
        variant='default'
        activeOpacity={0.8}
        onPress={onNext}
        style={{
          width: 60,
          height: 60,
          padding: 0,
        }}
        gradientConfig={{
          colors: ["rgba(255,255,255,0.09)", "rgba(255,255,255,0.18)"],
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 },
          style: btnStyles.arrowButton,
        }}>
        <Image
          source={AppIcons.arrowUpRightGreen}
          style={btnStyles.arrowIcon}
        />
      </IconButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 160,
    justifyContent: "space-between",
  },

  kicker: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 80,
    marginBottom: 12,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
    lineHeight: 46,
  },

  description: {
    marginTop: 24,
    color: "#E5E7EB",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: "90%",
  },
})
