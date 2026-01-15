import React from "react"
import { View } from "react-native"
import { PageLayoutWrap } from "../../components/organisms"
import { Typography } from "../../components/atoms"
import { useTheme } from "../../../shared/theme/ThemeContext"

export const ProfileScreen: React.FC = () => {
  const { theme } = useTheme()

  return (
    <PageLayoutWrap
      showDrawerMenu={false}
      showWallet={false}
      heading='My Profile'
      subHeading='Complete your secure token purchase and support long-term environmental restoration.'>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='headlineMedium'>Profile</Typography>
        <Typography
          variant='bodyLarge'
          color='secondary'
          style={{ marginTop: 8 }}>
          Manage your account and settings.
        </Typography>
      </View>
    </PageLayoutWrap>
  )
}
