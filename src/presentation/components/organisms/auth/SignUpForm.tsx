import React, { useMemo } from "react"
import { View, TouchableOpacity } from "react-native"
import { createStyles } from "./styles"

import { Feather, Ionicons, Octicons } from "@expo/vector-icons"
import { useFormik } from "formik"
import { SignUpSchema } from "./validation"
import { Routes } from "../../../navigation/constants"
import { SignUpScreenProps } from "../../../navigation/types"
import { useTheme } from "../../../../shared/theme/ThemeContext"
import { useAuth } from "../../../../state/contexts/AuthContext"
import { Button, Input, Typography } from "../../atoms"
import { PasswordStrength } from "."

interface SignUpData {
  name: string
  email: string
  password: string
}

export const SignUpForm: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { theme } = useTheme()
  const { signUp } = useAuth()

  const handleSignIn = () => {
    navigation.navigate(Routes.SIGN_IN)
  }

  const formik = useFormik<SignUpData>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      await signUp(values)
    },
  })

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Input
          startIcon={
            <Ionicons
              name='person-outline'
              size={20}
              color={theme.colors.text.secondary}
            />
          }
          label='Display Name'
          placeholder='Your name'
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          errorLabel={formik.touched.name ? formik.errors.name : undefined}
        />
      </View>

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
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          errorLabel={
            formik.touched.password ? formik.errors.password : undefined
          }
        />
      </View>

      <PasswordStrength password={formik.values.password} />

      <Button
        variant='primary'
        size='medium'
        disabled={!formik.isValid}
        loading={formik.isSubmitting}
        onPress={() => formik.handleSubmit()}>
        <Typography variant='titleMedium'>Create Account</Typography>
      </Button>
    </View>
  )
}

export default SignUpForm
