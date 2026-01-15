import React from "react"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { DrawerParamList } from "../types"
import { Routes } from "../constants"
import { HomeScreen } from "../../screens/home"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { useAuth } from "../../../state/contexts/AuthContext"
import {
  Typography,
  OfferingIcon,
  ProfileIcon,
  LogoutIcon,
  HamburgerIcon,
} from "../../components/atoms"
import { ScreenLayout } from "../../components/organisms"

const Drawer = createDrawerNavigator<DrawerParamList>()

// Custom Drawer Content
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { theme } = useTheme()
  const { signOut } = useAuth()
  const { navigation } = props

  const handleLogout = () => {
    navigation.closeDrawer()
    signOut()
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    header: {
      paddingHorizontal: theme.layout.screenPaddingHorizontal,
      paddingVertical: theme.spacing.xl,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.default,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.layout.screenPaddingHorizontal,
      paddingVertical: theme.spacing.md,
    },
    menuItemIcon: {
      marginRight: theme.spacing.md,
    },
    menuItemText: {
      flex: 1,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border.default,
      marginVertical: theme.spacing.sm,
    },
    footer: {
      marginTop: "auto",
      paddingVertical: theme.spacing.lg,
    },
  })

  const MenuItem = ({
    icon,
    label,
    onPress,
  }: {
    icon: React.ReactNode
    label: string
    onPress: () => void
  }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemIcon}>{icon}</View>
      <Typography variant='bodyLarge' style={styles.menuItemText}>
        {label}
      </Typography>
    </TouchableOpacity>
  )

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Typography variant='headlineSmall'>Menu</Typography>
      </View>

      <View>
        <MenuItem
          icon={<OfferingIcon size={24} />}
          label='Offering'
          onPress={() => navigation.navigate("Offering")}
        />

        <MenuItem
          icon={<ProfileIcon size={24} />}
          label='Profile'
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.divider} />
        <MenuItem
          icon={<LogoutIcon size={24} />}
          label='Logout'
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  )
}

// Placeholder screens
const OfferingScreen = () => {
  const { theme } = useTheme()

  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='headlineMedium'>Offering Screen</Typography>
        <Typography
          variant='bodyLarge'
          color='secondary'
          style={{ marginTop: 8 }}
        >
          Coming Soon
        </Typography>
      </View>
    </ScreenLayout>
  )
}

const ProfileScreen = () => {
  const { theme } = useTheme()

  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='headlineMedium'>Profile Screen</Typography>
        <Typography
          variant='bodyLarge'
          color='secondary'
          style={{ marginTop: 8 }}
        >
          Coming Soon
        </Typography>
      </View>
    </ScreenLayout>
  )
}

export const DrawerNavigator: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.surface,
          width: 280,
        },
        drawerActiveBackgroundColor: theme.colors.action.selected,
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text.primary,
        overlayColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Drawer.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name={Routes.OFFERING}
        component={OfferingScreen}
        options={{
          drawerLabel: "Offering",
        }}
      />
      <Drawer.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          drawerLabel: "Profile",
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
