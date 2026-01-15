import React, { useMemo, useState } from "react"
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native"
import { useTheme } from "../../../shared/theme/ThemeContext"
import {
  Typography,
  Input,
  Button,
  Checkbox,
  RadioGroup,
} from "../../components/atoms"
import { ScreenLayout } from "../../components/organisms"
import { SignUpScreenProps } from "../../navigation/types"
import { useAuth } from "../../../state/contexts/AuthContext"
import { createStyles } from "./styles"
import { Routes } from "../../navigation"
import { PasswordStrength } from "./PasswordStrength"
import { Feather, Ionicons, Octicons } from "@expo/vector-icons"
import { useFormik } from "formik"
import { SignUpSchema } from "./validation"

interface SignUpData {
  name: string
  email: string
  password: string
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
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
    <ScreenLayout showDrawerMenu={false} showWallet={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Typography variant='headlineLarge'>RESTORE COIN</Typography>
              <Typography
                variant='bodyLarge'
                color='secondary'
                style={styles.subtitle}
              >
                Create your account
              </Typography>
            </View>

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
                  errorLabel={
                    formik.touched.name ? formik.errors.name : undefined
                  }
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
                  errorLabel={
                    formik.touched.email ? formik.errors.email : undefined
                  }
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
                onPress={() => formik.handleSubmit()}
              >
                <Typography variant='titleMedium'>Create Account</Typography>
              </Button>
            </View>

            <View style={styles.signUpContainer}>
              <Typography variant='bodyMedium' color='secondary'>
                Already have an account?
              </Typography>
              <TouchableOpacity
                style={styles.signUpLink}
                onPress={handleSignIn}
              >
                <Typography
                  style={{ fontWeight: "500" }}
                  variant='bodyMedium'
                  color={theme?.colors?.primary}
                >
                  Sign In
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  )
}

export default SignUpScreen
