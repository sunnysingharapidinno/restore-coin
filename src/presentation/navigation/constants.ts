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

  // Drawer routes
  HOME: "Home",
  OFFERING: "Offering",
  PROFILE: "Profile",

  // Add more routes as needed
  // SETTINGS: 'Settings',
  // WALLET: 'Wallet',
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
