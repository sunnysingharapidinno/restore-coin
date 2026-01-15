import React, { useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"
import { PageLayoutWrap } from "../../components/organisms"
import { Button, Typography } from "../../components/atoms"
import { useTheme } from "../../../shared/theme/ThemeContext"
import CardWrap from "../../components/organisms/CardWrap"
import { Theme } from "../../../shared/theme"
import AppIcons from "../../../assets/icons/AppIcons"
import { useNavigation } from "@react-navigation/native"
import { Routes } from "../../navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { TokenStackParamList } from "../../navigation/types"

export const TokenOfferingScreen: React.FC = () => {
  const { theme } = useTheme()
  const styles = useMemo(() => createStyles(theme), [theme])

  const navigation =
    useNavigation<NativeStackNavigationProp<TokenStackParamList>>()

  const handleBuyTokens = () => {
    navigation.navigate(Routes.BUY_TOKENS)
  }

  return (
    <PageLayoutWrap
      showDrawerMenu
      showWallet
      heading='RESTORE Token Offering'
      subHeading='Private token offering for accredited investors only'>
      <CardWrap>
        <View style={styles.row}>
          <Image
            source={AppIcons.fileIcon}
            style={{ width: 20, height: 20, objectFit: "contain" }}
          />
          <Typography variant='titleMedium'>Token Offering Summary</Typography>
        </View>

        <CardWrap
          style={{
            backgroundColor: theme.colors.cardSecondaryBg,
            paddingVertical: 0,
          }}>
          <View style={styles.contentRow}>
            <Typography style={styles.contentRowText} variant='bodyLarge'>
              Token Name
            </Typography>
            <Typography variant='bodyLarge'>50 MB</Typography>
          </View>
          <View style={styles.contentRow}>
            <Typography style={styles.contentRowText} variant='bodyLarge'>
              Token Symbol
            </Typography>
            <Typography color='secondary' variant='bodyLarge'>
              REST
            </Typography>
          </View>
          <View style={styles.contentRow}>
            <Typography style={styles.contentRowText} variant='bodyLarge'>
              Price per Token
            </Typography>
            <Typography color='secondary' variant='bodyLarge'>
              $1.00
            </Typography>
          </View>
          <View
            style={[
              styles.contentRow,
              { borderBottomWidth: 0, borderBottomColor: "transparent" },
            ]}>
            <Typography style={styles.contentRowText} variant='bodyLarge'>
              Total Supply
            </Typography>
            <Typography color='secondary' variant='bodyLarge'>
              1,000,000,000 REST
            </Typography>
          </View>
        </CardWrap>
        <Typography
          align='center'
          style={styles.paragraph}
          variant='labelLarge'
          color='secondary'>
          This is a private token offering for accredited investors only. Tokens
          will be delivered to your connected wallet address upon purchase and
          approval.
        </Typography>
        <Button variant='primary' size='medium' onPress={handleBuyTokens}>
          <Typography variant='titleMedium'>Buy Restore Tokens</Typography>
        </Button>
      </CardWrap>
    </PageLayoutWrap>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    contentRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: theme.spacing.md,
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.lineColor,
    },
    contentRowText: {
      fontWeight: "500",
    },
    paragraph: {
      marginVertical: theme.spacing.md,
    },
    inputContainer: {
      marginBottom: theme.spacing.md,
    },
  })
