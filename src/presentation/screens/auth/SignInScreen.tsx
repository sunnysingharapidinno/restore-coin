import React, { useMemo, useState } from "react"
import { View, TouchableOpacity } from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import { Typography, Input, Button, RadioInput } from "../../components/atoms"
import { PageLayoutWrap } from "../../components/organisms"
import { SignInScreenProps } from "../../navigation/types"
import { useAuth } from "../../../state/contexts/AuthContext"
import Feather from "@expo/vector-icons/Feather"
import Octicons from "@expo/vector-icons/Octicons"
import { createStyles } from "./styles"
import { Routes } from "../../navigation/constants"
import { useFormik } from "formik"
import { SignInSchema } from "./validation"

export const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { theme } = useTheme()
  const { signIn } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: SignInSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      await signIn(values.email, values.password)
    },
  })

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
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Input
            startIcon={
              <Octicons
                name='mail'
                size={20}
                color={theme.colors.text.secondary}
              />
            }
            label='Email'
            placeholder='you@example.com'
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            errorLabel={formik.touched.email ? formik.errors.email : undefined}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            startIcon={
              <Feather
                name='lock'
                size={20}
                color={theme.colors.text.secondary}
              />
            }
            label='Password'
            placeholder='•••••••••'
            secureTextEntry
            autoCapitalize='none'
            autoComplete='password'
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            errorLabel={
              formik.touched.password ? formik.errors.password : undefined
            }
          />
        </View>

        <View style={styles.rememberMeContainer}>
          <RadioInput
            label='Remember me for 30 days'
            selected={formik.values.rememberMe}
            onChange={(checked) => formik.setFieldValue("rememberMe", checked)}
          />
        </View>

        <Button
          variant='primary'
          size='medium'
          fullWidth
          disabled={!formik.isValid}
          loading={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}>
          <Typography variant='titleMedium'>Sign In</Typography>
        </Button>
      </View>

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
