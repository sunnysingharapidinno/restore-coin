import React, { useMemo } from "react"
import { View, TouchableOpacity } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography } from "../../components/atoms"
import { PageLayoutWrap } from "../../components/organisms"
import { SignUpScreenProps } from "../../navigation/types"
import { createStyles } from "./styles"
import { Routes } from "../../navigation/constants"
import SignUpForm from "../../components/organisms/auth/SignUpForm"

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  navigation,
  route,
}) => {
  const { theme } = useTheme()

  const handleSignIn = () => {
    navigation.navigate(Routes.SIGN_IN)
  }

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <PageLayoutWrap
      showDrawerMenu={false}
      showWallet={false}
      heading='RESTORE COIN'
      subHeading='Create your account'>
      <SignUpForm navigation={navigation} route={route} />

      <View style={styles.signUpContainer}>
        <Typography variant='bodyMedium' color='secondary'>
          Already have an account?
        </Typography>
        <TouchableOpacity style={styles.signUpLink} onPress={handleSignIn}>
          <Typography
            style={{ fontWeight: "500" }}
            variant='bodyMedium'
            color={theme?.colors?.primary}>
            Sign In
          </Typography>
        </TouchableOpacity>
      </View>
    </PageLayoutWrap>
  )
}

export default SignUpScreen
