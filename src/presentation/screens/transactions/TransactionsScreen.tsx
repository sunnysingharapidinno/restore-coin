import React from "react"
import { View } from "react-native"
import { ScreenLayout } from "../../components/organisms"
import { Typography } from "../../components/atoms"
import { useTheme } from "../../../shared/theme/ThemeContext"

export const TransactionsScreen: React.FC = () => {
  const { theme } = useTheme()

  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='headlineMedium'>Transactions</Typography>
        <Typography
          variant='bodyLarge'
          color='secondary'
          style={{ marginTop: 8 }}>
          View your transaction history.
        </Typography>
      </View>
    </ScreenLayout>
  )
}
