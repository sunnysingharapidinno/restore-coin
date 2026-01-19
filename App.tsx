import "react-native-gesture-handler"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "./src/shared/theme/ThemeContext"
import { AuthProvider } from "./src/state/contexts/AuthContext"
import { RootNavigator } from "./src/presentation/navigation"
import { useFonts } from "expo-font"
import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk"
import { SplashScreen } from "./src/presentation/screens/splash"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function App() {
  useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <RootNavigator />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
