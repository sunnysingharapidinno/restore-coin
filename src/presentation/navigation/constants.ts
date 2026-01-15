// Navigation route constants
// Using constants prevents typos and makes refactoring easier

export const Routes = {
  // Root routes
  SPLASH: "Splash",
  AUTH: "Auth",
  APP: "App",

  // Auth routes
  SIGN_IN: "SignIn",
  SIGN_UP: "SignUp",

  // App routes
  DRAWER: "Drawer",
  TAB_STACK: "TabStack",

  // Tab routes
  HOME: "Home",
  BUY_TOKENS: "BuyTokens",
  TOKEN_OFFERING: "TokenOffering",
  TRANSACTIONS: "Transactions",
  PROFILE: "Profile",

  // Legacy drawer routes
  OFFERING: "Offering",
} as const

// Auth flow specific options
export const AuthScreenOptions = {
  headerShown: false, // Hide header in auth screens
  animation: "slide_from_right" as const,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
}

// App flow specific options
export const AppScreenOptions = {
  headerBackTitleVisible: false,
  animation: "slide_from_right" as const,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
}
