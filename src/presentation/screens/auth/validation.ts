import * as Yup from "yup"

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "One uppercase letter required")
    .matches(/[a-z]/, "One lowercase letter required")
    .matches(/[0-9]/, "One number required")
    .matches(/[^A-Za-z0-9]/, "One special character required")
    .required("Password is required"),
})

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string().required("Password is required"),

  rememberMe: Yup.boolean(),
})
