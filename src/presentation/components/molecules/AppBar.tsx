import React, { useMemo } from "react"
import { View, StyleSheet, Image, Platform } from "react-native"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import { IconButton } from "../atoms/IconButton"
import { useTheme } from "../../../shared/theme/ThemeContext"
import AppIcons from "../../../assets/icons/AppIcons"
import { Theme } from "../../../shared/theme"

interface AppBarProps {
  showDrawerMenu?: boolean
  showWallet?: boolean
  onWalletPress?: () => void
  onMenuPress?: () => void
}

export const AppBar: React.FC<AppBarProps> = ({
  showDrawerMenu = true,
  showWallet = true,
  onWalletPress,
  onMenuPress,
}) => {
  const navigation = useNavigation()
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  const handleMenuPress = () => {
    if (onMenuPress) {
      onMenuPress()
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer())
    }
  }

  const handleWalletPress = () => {
    if (onWalletPress) {
      onWalletPress()
    } else {
      console.log("Wallet pressed")
    }
  }

  return (
    <View
      style={[
        styles.appBar,
        {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.border.default,
        },
      ]}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        {showDrawerMenu && (
          <IconButton onPress={handleMenuPress} size='large' variant='default'>
            <MaterialIcons
              name='menu'
              size={20}
              color={theme.colors.primaryContrast}
            />
          </IconButton>
        )}

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={AppIcons.logoIcon}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {showWallet && (
          <IconButton
            onPress={handleWalletPress}
            size='medium'
            variant='outlined'
            style={styles.walletBtn}>
            <Image
              source={AppIcons.walletIcon}
              style={{ width: 12, height: 12 }}
            />
          </IconButton>
        )}
      </View>
    </View>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    appBar: {
      height: 67,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      borderBottomWidth: 1,
      alignContent: "center",
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    rightSection: {
      alignItems: "center",
    },
    logoContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    walletBtn: {
      borderWidth: 2,
      borderColor: theme?.colors?.border.greenBorder,
      backgroundColor: theme?.colors?.greenBtnBg,

      // iOS Shadow
      shadowColor: theme?.colors?.greenBtnShadow,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 2,

      // Android Shadow
      elevation: Platform.OS === "android" ? 2 : 0,
    },
  })

export default AppBar
