import React from "react"
import { View } from "react-native"
import { PageLayoutWrap } from "../../components/organisms"
import { Typography } from "../../components/atoms"
import { useTheme } from "../../../shared/theme/ThemeContext"

export const BuyTokensScreen: React.FC = () => {
  const { theme } = useTheme()

  return (
    <PageLayoutWrap
      showDrawerMenu={false}
      showWallet={false}
      heading='Buy RESTORE Tokens'
      subHeading='Complete your secure token purchase and support long-term environmental restoration.'>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='headlineMedium'>Buy Tokens</Typography>
        <Typography
          variant='bodyLarge'
          color='secondary'
          style={{ marginTop: 8 }}>
          Exchange and purchase tokens here.
        </Typography>
      </View>
    </PageLayoutWrap>
  )
}
