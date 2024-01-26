import * as yup from 'yup'

export const authSchema = yup.object().shape({
  msv: yup
    .string()
    .min(5, "")
    .required("Nhập mã sinh viên!!"),
  password: yup
    .string()
    .min(3, "Mật khẩu yêu cầu trên 8 kí tự")
    .required("Nhập mật khẩu")
});

