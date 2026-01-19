import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import { SplashStepProps } from "../../../screens/splash/types"
import { Button, Typography } from "../../atoms"

export const SplashStepFive: React.FC<SplashStepProps> = ({ onNext }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1652841611360-2deac1ff384c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
      }}
      style={styles.container}>
      <View>
        <Typography style={styles.title} variant='displayLarge'>
          One Coin.{"\n"}One Future.
        </Typography>

        <Typography
          variant='titleMedium'
          style={{ lineHeight: 28, fontWeight: 500 }}>
          Join a new generation of investors shaping a greener, more responsible
          world—one step at a time.
        </Typography>
      </View>

      <Button style={styles.cta} onPress={onNext}>
        Get Started
      </Button>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },

  title: {
    marginTop: 120,
    marginBottom: 30,
  },

  cta: {
    height: 58,
    borderRadius: 29,
    marginBottom: 40,
  },
})
