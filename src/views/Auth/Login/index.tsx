import React from 'react';
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
import { useAppDispatch, useAppSelector } from "@/store";
import { login } from "@/store/Action/auth.action.ts";
import { Formik } from "formik";
import { authSchema } from "@/helper/FormSchema";
import { ConfigProvider, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '@/services/auth.service';

function Login() {
  const dispatch = useAppDispatch();
  const { message, isLoading } = useAppSelector<any>(state => state.auth);
  const navigate = useNavigate();
  const handleLogin = async (value) => {
    // dispatch(login(value));
    const res = await AuthService.login(value);
    console.log(res);
    // navigate('/home')
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <h2 className="fw-bold mb-2 text-center pt-5">Đăng nhập</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={authSchema}
              onSubmit={(value) => handleLogin(value)}
            >
              {({ values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched }) => (
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <div className='mb-4'>
                    <MDBInput
                      wrapperClass='mb-1 w-100' label='Email' id='msv' type='text' size="lg"
                      onFocus={() => {
                        setFieldTouched('email')
                      }}
                      onBlur={() => setFieldTouched('email')}
                      value={values.email}
                      onChange={handleChange('email')}
                    />
                    {errors.email && <div className='text-danger' style={{ fontSize: 12 }}>
                      {errors.email}
                    </div>}
                  </div>
                  <div className='mb-4'>
                    <MDBInput
                      wrapperClass='mb-1 w-100' label='Mật khẩu' id='password' type='password' size="lg"
                      onFocus={() => {
                        setFieldTouched('password')
                      }}
                      onBlur={() => setFieldTouched('password')}
                      value={values.password}
                      onChange={handleChange('password')}
                    />
                    {errors.password && <div className='text-danger' style={{ fontSize: 12 }}>
                      {errors.password}
                    </div>}
                  </div>
                  {message && <div className='pb-2 text-sm' style={{ color: 'red' }}> *{message} </div>}
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 14,
                        colorPrimary: "#fff"
                      },
                    }}
                  >
                    <Link to="/quen-mat-khau" className="forgot-password-link mb-2">Quên mật khẩu?</Link>
                    <MDBBtn
                      size='lg'
                      // onClick={isValid ? handleSubmit : () => { }}
                      type={"submit"}
                    >
                      {!isLoading ? 'Đăng nhập' : <Spin />}
                    </MDBBtn>
                    <MDBBtn
                      color='secondary'
                      className='mt-3'
                      size='lg'
                      onClick={() => {
                        navigate('/sign-up')
                      }}
                      type={"submit"}
                    >
                      Đăng ký
                    </MDBBtn>
                  </ConfigProvider>
                </MDBCardBody>
              )}
            </Formik>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
