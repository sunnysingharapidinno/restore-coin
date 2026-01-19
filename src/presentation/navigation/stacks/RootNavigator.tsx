import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types"
import { Routes } from "../constants"
import { SplashScreen } from "../../screens/splash"
import { AuthNavigator } from "./AuthNavigator"
import { AppNavigator } from "./AppNavigator"
import { useAuth } from "../../../state/contexts/AuthContext"

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth()
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash || isLoading) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}>
        {isAuthenticated ? (
          <Stack.Screen
            name={Routes.APP}
            component={AppNavigator}
            options={{
              animation: "slide_from_right",
            }}
          />
        ) : (
          <Stack.Screen
            name={Routes.AUTH}
            component={AuthNavigator}
            options={{
              animation: "slide_from_right",
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
