import * as yup from 'yup'

export const authSchema = yup.object().shape({
  email: yup
    .string().email().required(),
  password: yup
    .string()
    .min(5, "Mật khẩu yêu cầu trên 6 kí tự")
    .required("Nhập mật khẩu")
});

export const verifySchema = yup.object().shape({
  code: yup
    .string()
    .min(6, "Yêu cầu trên 6 kí tự")
    .required()
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string().email().required(),
  fullName: yup
    .string().required(),
  password: yup
    .string()
    .min(5, "Mật khẩu yêu cầu trên 6 kí tự")
    .required("Nhập mật khẩu")
})

export const changePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .max(16, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .required("nhập mật khẩu"),
  newPass: yup
    .string()
    .min(6, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .max(16, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .required("nhập mật khẩu mới"),
  retypePass: yup
    .string()
    .min(6, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .max(16, "Mật khẩu yêu cầu từ 6-16 kí tự")
    .required("nhập lại mật khẩu"),
});

export const fogotPasswordSchema = yup.object().shape({
  msv: yup
    .string()
    .min(6, "")
    .required("Nhập mã sinh viên!!")
});

