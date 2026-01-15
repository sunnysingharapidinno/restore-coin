import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"

// Define the param lists for each navigator

// Auth Stack param list
export type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

// Token Stack param list
export type TokenStackParamList = {
  TokenOffering: undefined
  BuyTokens: undefined
}

// Tab param list
export type TabParamList = {
  Home: undefined
  TokenStack: NavigatorScreenParams<TokenStackParamList>
  Transactions: undefined
  Profile: undefined
}

// Drawer param list
export type DrawerParamList = {
  TabStack: NavigatorScreenParams<TabParamList>
  Offering: undefined
  Profile: undefined
}

// App Stack param list
export type AppStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>
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

// Tab screens (Nested in Drawer)
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  DrawerScreenProps<DrawerParamList>
>

// Tab screen
export type TokenOfferingScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TokenStackParamList, "TokenOffering">,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    DrawerScreenProps<DrawerParamList>
  >
>

export type BuyTokensScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TokenStackParamList, "BuyTokens">,
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList>,
    DrawerScreenProps<DrawerParamList>
  >
>

export type DrawerProfileScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "Profile">,
  NativeStackScreenProps<AppStackParamList>
>

export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Profile">,
  DrawerScreenProps<DrawerParamList>
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
