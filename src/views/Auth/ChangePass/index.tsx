import React, {useEffect, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import {useAppDispatch, useAppSelector} from "@/store";
import {Formik} from "formik";
import {authSchema, changePasswordSchema} from "@/helper/FormSchema";
import {ConfigProvider, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {AuthService} from "@/services/auth.service";
import {toast} from "react-toastify";
import useLoading from "@/hook/useLoading";

function ChangePass() {
  const dispatch = useAppDispatch();
  const {message} = useAppSelector(state => state.auth)
  const [err, setErr] = useState(null);
  const {isLoading, show, hide} = useLoading()
  const handleRetrieval = async (value) => {
    if (value.newPass !== value.retypePass) {
      setErr('Repeat password không trùng new password')
      return;
    }
    setErr(null);
    show();
    try {
      // const {data} = await AuthService.changePassword(value.password, value.newPass);
      // toast.success(data.message);
      hide();
    } catch (e) {
      console.log('e---', e)
      setErr(e?.response?.data?.message)
      hide();
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>

            <h2 className="fw-bold mb-2 text-center pt-5">Đổi mật khẩu</h2>
            <Formik
              initialValues={{password: '', newPass: '', retypePass: ''}}
              validationSchema={changePasswordSchema}
              onSubmit={(value) => handleRetrieval(value)}
            >
              {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <div className='mb-4'>
                    <MDBInput wrapperClass='mb-1 w-100' label='Mật khẩu cũ' id='msv' type='text' size="lg"
                              onFocus={() => {
                                setFieldTouched('password')
                              }}
                              onBlur={() => setFieldTouched('password')}
                              value={values.password}
                              onChange={handleChange('password')}
                    />
                    {errors?.password ? <div className='text-danger' style={{fontSize: 12}}>
                      *{errors?.password}
                    </div> : <div></div>}
                  </div>
                  <div className='mb-4'>
                    <MDBInput wrapperClass='mb-1 w-100' label='Mật khẩu mới' id='msv' type='text' size="lg"
                              onFocus={() => {
                                setFieldTouched('newPass')
                              }}
                              onBlur={() => setFieldTouched('newPass')}
                              value={values.newPass}
                              onChange={handleChange('newPass')}
                    />
                    {errors?.newPass ? <div className='text-danger' style={{fontSize: 12}}>
                      *{errors?.newPass}
                    </div> : <div></div>}
                  </div>
                  <div className='mb-4'>
                    <MDBInput wrapperClass='mb-1 w-100' label='Nhâp lại mật khẩu mới' id='msv' type='text' size="lg"
                              onFocus={() => {
                                setFieldTouched('retypePass')
                              }}
                              onBlur={() => setFieldTouched('retypePass')}
                              value={values.retypePass}
                              onChange={handleChange('retypePass')}
                    />
                    {errors?.retypePass ? <div className='text-danger' style={{fontSize: 12}}>
                      *{errors?.retypePass}
                    </div> : <div></div>}
                  </div>
                  {err && <div className='text-danger mb-1' style={{fontSize: 12}} >
                    {err}
                  </div>}
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 14,
                        colorPrimary: "#fff"
                      },
                    }}
                  >
                    <MDBBtn
                      size='lg'
                      // onClick={isValid ? handleSubmit : () => {
                      //   console.log(errors)
                      // }}
                      type={"submit"}
                    >
                      {!isLoading ? 'Xác nhận thay đổi' : <Spin/>}
                    </MDBBtn>
                    <Link to="/home" className="forgot-password-link block mt-4">Quay lại trang chủ</Link>
                  </ConfigProvider>
                </MDBCardBody>
              )}
            </Formik>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default ChangePass;
