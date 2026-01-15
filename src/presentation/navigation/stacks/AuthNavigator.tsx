import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthStackParamList } from "../types"
import { Routes, AuthScreenOptions } from "../constants"
import { SignInScreen, SignUpScreen } from "../../screens/auth"
import { useTheme } from "../../../shared/theme/ThemeContext"

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthNavigator: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator
      initialRouteName={Routes.SIGN_IN}
      screenOptions={{
        ...AuthScreenOptions,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name={Routes.SIGN_IN}
        component={SignInScreen}
        options={{
          title: "Sign In",
          // Custom transitions can be added here
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name={Routes.SIGN_UP}
        component={SignUpScreen}
        options={{
          title: "Sign Up",
          // Navigate back to sign in with slide animation
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
