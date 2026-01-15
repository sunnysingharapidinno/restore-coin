import React, { ReactNode } from "react"
import { View, StyleSheet, StatusBar, Platform } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { AppBar } from "../molecules"
import { useTheme } from "../../../shared/theme/ThemeContext"

interface ScreenLayoutProps {
  children: ReactNode
  showAppBar?: boolean
  showDrawerMenu?: boolean
  showWallet?: boolean
  onMenuPress?: () => void
  onWalletPress?: () => void
  backgroundColor?: string
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  showAppBar = true,
  showDrawerMenu = true,
  showWallet = true,
  onMenuPress,
  onWalletPress,
  backgroundColor,
}) => {
  const { theme } = useTheme()
  const insets = useSafeAreaInsets()

  // Calculate status bar height for Android
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0
  const topSafeArea = Platform.OS === "ios" ? insets.top : statusBarHeight

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor || theme.colors.background },
      ]}
    >
      {/* Status Bar Configuration */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={Platform.OS === "android" ? "#000000" : undefined}
        translucent={Platform.OS === "android"}
      />

      {/* Top Safe Area */}
      <View
        style={[
          styles.statusBarArea,
          { height: topSafeArea, backgroundColor: "#000000" },
        ]}
      />

      {/* AppBar */}
      {/* {showAppBar && (
        <AppBar
          showDrawerMenu={showDrawerMenu}
          showWallet={showWallet}
          onMenuPress={onMenuPress}
          onWalletPress={onWalletPress}
        />
      )} */}

      <AppBar
        showDrawerMenu
        showWallet
        onMenuPress={onMenuPress}
        onWalletPress={onWalletPress}
      />

      {/* Content Area */}
      <View style={styles.content}>
        {Platform.OS === "ios" ? (
          <SafeAreaView
            style={styles.safeArea}
            edges={["bottom", "left", "right"]}
          >
            {children}
          </SafeAreaView>
        ) : (
          <View style={styles.safeArea}>{children}</View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarArea: {
    width: "100%",
  },
  content: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
})
