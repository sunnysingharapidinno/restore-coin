import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TokenStackParamList } from "../types"
import { Routes, AppScreenOptions } from "../constants"
import { TokenOfferingScreen } from "../../screens/token-offering"
import { BuyTokensScreen } from "../../screens/buy-tokens"
import { useTheme } from "../../../shared/theme/ThemeContext"

const Stack = createNativeStackNavigator<TokenStackParamList>()

export const TokenStackNavigator: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator
      initialRouteName={Routes.TOKEN_OFFERING}
      screenOptions={{
        ...AppScreenOptions,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.TOKEN_OFFERING}
        component={TokenOfferingScreen}
      />
      <Stack.Screen name={Routes.BUY_TOKENS} component={BuyTokensScreen} />
    </Stack.Navigator>
  )
}

export default TokenStackNavigator
