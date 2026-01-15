import React, { useMemo } from "react"
import { View, TouchableOpacity } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "../../components/atoms"
import { PageLayoutWrap } from "../../components/organisms"
import { SignInScreenProps } from "../../navigation/types"
import { createStyles } from "./styles"
import { Routes } from "../../navigation/constants"
import SignInForm from "../../components/organisms/auth/SignInForm"

export const SignInScreen: React.FC<SignInScreenProps> = ({
  navigation,
  route,
}) => {
  const { theme } = useTheme()

  const handleSignUp = () => {
    navigation.navigate(Routes.SIGN_UP)
  }

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <PageLayoutWrap
      showDrawerMenu={false}
      showWallet={false}
      heading='RESTORE COIN'
      subHeading='Sign in to your account'>
      <SignInForm navigation={navigation} route={route} />

      <View style={styles.signUpContainer}>
        <Typography variant='bodyMedium' color='secondary'>
          Already have an account?
        </Typography>
        <TouchableOpacity style={styles.signUpLink} onPress={handleSignUp}>
          <Typography
            style={{ fontWeight: "500" }}
            variant='bodyMedium'
            color={theme?.colors?.primary}>
            Sign Up
          </Typography>
        </TouchableOpacity>
      </View>
    </PageLayoutWrap>
  )
}

export default SignInScreen
