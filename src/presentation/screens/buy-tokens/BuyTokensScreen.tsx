import React, { useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"
import { PageLayoutWrap } from "../../components/organisms"
import { Button, Checkbox, Input, Typography } from "../../components/atoms"
import { useTheme } from "../../../shared/theme/ThemeContext"
import CardWrap from "../../components/organisms/CardWrap"
import { Theme } from "../../../shared/theme"
import AppIcons from "../../../assets/icons/AppIcons"
import { useFormik } from "formik"
import * as Yup from "yup"

interface TokenOfferingData {
  usdAmount: string
  email: string
  termsAccepted: boolean
}

const buyFormSchema = Yup.object().shape({
  usdAmount: Yup.number()
    .required("USD amount is required")
    .positive("Amount must be positive")
    .min(1, "Minimum purchase amount is $1")
    .max(1000000, "Maximum purchase amount is $1,000,000")
    .typeError("Please enter a valid number"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the Terms & Services")
    .required("You must accept the Terms & Services"),
})

export const BuyTokensScreen: React.FC = () => {
  const { theme } = useTheme()

  const styles = useMemo(() => createStyles(theme), [theme])

  const formik = useFormik<TokenOfferingData>({
    initialValues: {
      usdAmount: "",
      email: "",
      termsAccepted: false,
    },
    validationSchema: buyFormSchema,
    validateOnMount: true,
    onSubmit: async (values) => {},
  })

  return (
    <PageLayoutWrap
      showDrawerMenu
      showWallet
      heading='Buy RESTORE Tokens'
      subHeading='Complete your secure token purchase and support long-term environmental restoration.'>
      <CardWrap>
        <View style={styles.row}>
          <Image
            source={AppIcons.coinsGreenIcon}
            style={{ width: 20, height: 20 }}
          />
          <Typography variant='titleMedium'>Buy Tokens</Typography>
        </View>

        <Typography
          style={styles.paragraph}
          variant='titleMedium'
          color='secondary'>
          Enter the amount you would like to invest. RESTORE Tokens will be
          delivered to your connected wallet address:{" "}
          <Typography style={{ fontWeight: 700 }} variant='titleMedium'>
            0x8B2E...5D72
          </Typography>
        </Typography>
        <View style={styles.inputContainer}>
          <Input
            label='USD Amount *'
            placeholder='0.00'
            value={formik.values.usdAmount}
            onChangeText={formik.handleChange("usdAmount")}
            onBlur={formik.handleBlur("usdAmount")}
            errorLabel={
              formik.touched.usdAmount ? formik.errors.usdAmount : undefined
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label='Email Address *'
            placeholder='your@gmail.com'
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            errorLabel={formik.touched.email ? formik.errors.email : undefined}
          />
        </View>
        <View style={styles.inputContainer}>
          <Checkbox
            label='I accept the terms and conditions'
            helperText='(The checkbox will unlock after you scroll to the end of the Terms & Services).'
            checked={formik.values.termsAccepted}
            onChange={(checked) =>
              formik.setFieldValue("termsAccepted", checked)
            }
          />
        </View>
        <Button
          variant='primary'
          size='medium'
          disabled={!formik.isValid}
          loading={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}>
          <Typography variant='titleMedium'>Continue to payment</Typography>
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
    },
    paragraph: {
      marginVertical: theme.spacing.md,
    },
    inputContainer: {
      marginBottom: theme.spacing.md,
    },
  })
