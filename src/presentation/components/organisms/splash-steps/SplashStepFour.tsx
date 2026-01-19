import React, { useMemo } from "react"
import { View, StyleSheet, Image, ImageBackground } from "react-native"
import { SplashStepProps } from "../../../screens/splash/types"
import { IconButton, Typography } from "../../atoms"
import AppIcons from "../../../../assets/icons/AppIcons"
import { useTheme } from "../../../../shared/theme/ThemeContext"
import { createBtnStyles } from "./style"
import { Theme } from "../../../../shared/theme"

export const SplashStepFour: React.FC<SplashStepProps> = ({ onNext }) => {
  const { theme } = useTheme()
  const btnStyles = useMemo(() => createBtnStyles(theme), [theme])
  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1648473686920-cb4191b11965?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}>
      <View>
        <Typography style={styles.title} variant='displayLarge'>
          Built for{"\n"}Long-Term Value
        </Typography>

        <Typography
          variant='titleMedium'
          style={{ lineHeight: 28, fontWeight: 500 }}>
          This program is exclusively available to accredited investors who
          align with long-term sustainability and value creation.
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
          alignSelf: "flex-end",
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

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "space-between",
    },

    title: {
      marginTop: 100,
      marginBottom: 30,
    },
  })
