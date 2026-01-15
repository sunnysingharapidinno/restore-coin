import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Routes } from "../constants"
import { TabParamList } from "../types"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { HomeScreen } from "../../screens/home"
import { TransactionsScreen } from "../../screens/transactions"
import { ProfileScreen } from "../../screens/profile"
import { TokenStackNavigator } from "./TokenStackNavigator"
import { Image } from "react-native"
import AppIcons from "../../../assets/icons/AppIcons"

const Tab = createBottomTabNavigator<TabParamList>()

// Fixed height for tab bar content (icons + labels)
const TAB_BAR_CONTENT_HEIGHT = 72

export const TabNavigator: React.FC = () => {
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.secondary, // Muted gray
        tabBarStyle: {
          backgroundColor: theme.colors.secondaryDark,
          // Total height = content height + bottom safe area
          height: TAB_BAR_CONTENT_HEIGHT + insets.bottom,
          // Padding at bottom for safe area (navigation pill)
          paddingBottom: insets.bottom,
          paddingTop: 8,
          elevation: 0,
          borderTopColor: theme.colors.border.navBorder,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          fontFamily: "SpaceGrotesk_500Medium",
        },
        tabBarIcon: ({ focused, color }) => {
          if (route.name === Routes.HOME) {
            return <Feather name='home' size={24} color={color} />
          } else if (route.name === Routes.TOKEN_STACK) {
            return (
              <Image
                source={focused ? AppIcons.coinsGreenIcon : AppIcons.coinsIcon}
                style={{ width: 23, height: 23 }}
                tintColor={color}
              />
            )
          } else if (route.name === Routes.TRANSACTIONS) {
            return (
              <Ionicons
                name={
                  (focused
                    ? "swap-horizontal"
                    : "swap-horizontal-outline") as any
                }
                size={24}
                color={color}
              />
            )
          } else if (route.name === Routes.PROFILE) {
            return <Ionicons name='person-outline' size={24} color={color} />
          }
          return null
        },
      })}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={Routes.TOKEN_STACK}
        component={TokenStackNavigator}
        options={{
          tabBarLabel: "Buy Tokens",
        }}
      />
      <Tab.Screen
        name={Routes.TRANSACTIONS}
        component={TransactionsScreen}
        options={{
          tabBarLabel: "Transactions",
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
