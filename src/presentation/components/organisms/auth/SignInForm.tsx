import React, { useMemo, useState } from "react"
import { View, TouchableOpacity } from "react-native"
import Feather from "@expo/vector-icons/Feather"
import Octicons from "@expo/vector-icons/Octicons"
import { createStyles } from "./styles"
import { useFormik } from "formik"
import { SignInSchema } from "./validation"
import { Routes } from "../../../navigation/constants"
import { SignInScreenProps } from "../../../navigation/types"
import { useTheme } from "../../../../shared/theme/ThemeContext"
import { useAuth } from "../../../../state/contexts/AuthContext"
import { Button, Input, RadioInput, Typography } from "../../atoms"

export const SignInForm: React.FC<SignInScreenProps> = ({ navigation }) => {
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
        onPress={() => formik.handleSubmit()}
      >
        <Typography variant='titleMedium'>Sign In</Typography>
      </Button>
    </View>
  )
}

export default SignInForm
