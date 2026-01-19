import React, { useMemo } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
} from "react-native"
import { SplashStepProps } from "../../../screens/splash/types"
import AppImages from "../../../../assets/images/AppImages"
import { IconButton, Typography } from "../../atoms"
import { Theme } from "../../../../shared/theme"
import { useTheme } from "../../../../shared/theme/ThemeContext"
import AppIcons from "../../../../assets/icons/AppIcons"
import { createBtnStyles } from "./style"

export const SplashStepOne: React.FC<SplashStepProps> = ({ onNext }) => {
  const { theme } = useTheme()
  const styles = useMemo(() => createStyles(theme), [theme])
  const btnStyles = useMemo(() => createBtnStyles(theme), [theme])

  return (
    <ImageBackground source={AppImages.splash} style={styles.container}>
      {/* Top */}
      <View>
        <IconButton size='medium' variant='outlined' style={styles.walletBtn}>
          <Image
            source={AppIcons.walletIcon}
            style={{ width: 28, height: 28 }}
          />
        </IconButton>

        <View style={styles.topRow}>
          <Image
            source={AppIcons.logoTransparent}
            style={{ width: 48, height: 48 }}
          />

          <View>
            <Typography style={{ fontWeight: "500" }} variant='titleSmall'>
              Mia Lennox
            </Typography>
            <Typography variant='bodySmall' color='secondary'>
              Design Director
            </Typography>
          </View>
        </View>

        <Typography
          variant='bodyLarge'
          style={{ lineHeight: 28, fontWeight: 500 }}>
          An exclusive private token offering for accredited investors only,
          focused on restoring the Earth through sustainable innovation,
          environmental responsibility, and long-term value creation—one coin at
          a time.
        </Typography>
      </View>

      {/* Bottom */}
      <View style={styles.bottom}>
        <Typography variant='headlineSmall' style={styles.subtitle}>
          Raynor Shine Foundation
        </Typography>
        <Typography style={{ marginBottom: 18 }} variant='displayLarge'>
          Investor Token{"\n"}Program
        </Typography>

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
      </View>
    </ImageBackground>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 52,
      justifyContent: "space-between",
    },

    topRow: {
      marginBottom: 24,
      flexDirection: "row",
      alignItems: "center",
      gap: 22,
    },

    walletBtn: {
      alignSelf: "flex-end",

      marginBottom: 5,
      borderWidth: 2,
      height: 42,
      width: 42,

      borderColor: theme?.colors?.border.greenBorder,
      backgroundColor: theme?.colors?.greenBtnBg,

      // iOS Shadow
      shadowColor: theme?.colors?.greenBtnShadow,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 2,

      // Android Shadow
      elevation: Platform.OS === "android" ? 2 : 0,
    },

    bottom: {
      marginBottom: 65,
    },

    subtitle: {
      marginBottom: 14,
      fontSize: 20,
    },
  })
