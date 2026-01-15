import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { CompositeScreenProps } from "@react-navigation/native"

// Define the param lists for each navigator

// Auth Stack param list
export type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

// Drawer param list
export type DrawerParamList = {
  Home: undefined
  Offering: undefined
  Profile: undefined
}

// App Stack param list
export type AppStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>
  // Add more app screens here as needed
  // Settings: undefined;
}

// Root Stack param list
export type RootStackParamList = {
  Splash: undefined
  Auth: NavigatorScreenParams<AuthStackParamList>
  App: NavigatorScreenParams<AppStackParamList>
}

// Screen props types for easy usage in screens
// Auth screens
export type SignInScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SignIn"
>
export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SignUp"
>

// Drawer screens
export type HomeScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>

export type OfferingScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "Offering">,
  NativeStackScreenProps<AppStackParamList>
>

export type ProfileScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "Profile">,
  NativeStackScreenProps<AppStackParamList>
>

// Root screens
export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Splash"
>

// Type for useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
