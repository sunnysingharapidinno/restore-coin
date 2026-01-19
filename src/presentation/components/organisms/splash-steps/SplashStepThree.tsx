import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { SplashStepProps } from "../../../screens/splash/types"
import { Button, Typography } from "../../atoms"

export const SplashStepThree: React.FC<SplashStepProps> = ({ onNext }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}>
      <View>
        <Typography style={styles.title} variant='displayLarge'>
          Private{"\n"}Access
        </Typography>

        <Typography
          variant='titleMedium'
          style={{ lineHeight: 28, fontWeight: 500 }}>
          This program is exclusively available to accredited investors who
          align with long-term sustainability and value creation.
        </Typography>
      </View>

      <Button style={styles.cta} onPress={onNext}>
        Continue
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
    marginBottom: 24,
  },

  cta: {
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
})
