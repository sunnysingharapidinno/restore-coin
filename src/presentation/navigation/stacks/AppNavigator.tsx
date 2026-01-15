import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "../types"
import { Routes, AppScreenOptions } from "../constants"
import { DrawerNavigator } from "./DrawerNavigator"
import { TabNavigator } from "./TabNavigator"
import { useTheme } from "../../../shared/theme/ThemeContext"

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppNavigator: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator
      initialRouteName={Routes.DRAWER}
      screenOptions={{
        ...AppScreenOptions,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.DRAWER} component={DrawerNavigator} />

      {/* Add more app screens here as needed */}
      {/* 
      <Stack.Screen
        name={Routes.SETTINGS}
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
      */}
    </Stack.Navigator>
  )
}

export default AppNavigator
