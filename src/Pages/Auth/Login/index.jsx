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
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {login, refreshToken} from "../../../Store/Action/auth.action";
import {Formik} from "formik";
import {authSchema} from "../../../Helper/FormSchema";
import {ConfigProvider, Spin} from 'antd';
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useAppDispatch();
  const [msv, setMsv] = useState();
  const [password, setPassword] = useState();
  const {message, isLoading} = useAppSelector(state => state.auth)
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([message, ...messages])
  }, [message]);
  const handleLogin = (value) => {
    if (value.msv.startsWith("a") || value.msv.startsWith("A")) {
      console.log("a")
      dispatch(login(value));
    } else {
      dispatch(login({mgv: value.msv, password: value.password}));
      console.log({mgv: value.msv, password: value.password})
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>

            <h2 className="fw-bold mb-2 text-center pt-5">Đăng nhập</h2>

            <Formik
              initialValues={{msv: '', password: ''}}
              validationSchema={authSchema}
              onSubmit={(value) => handleLogin(value)}
            >
              {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <MDBInput wrapperClass='mb-4 w-100' label='Tài khoản' id='msv' type='text' size="lg"
                            onFocus={() => {
                              setFieldTouched('msv')
                            }}
                            onBlur={() => setFieldTouched('msv', '')}
                            value={values.msv}
                            onChange={handleChange('msv')}
                  />
                  <MDBInput wrapperClass='mb-4 w-100' label='Mật khẩu' id='password' type='password' size="lg"
                            onFocus={() => {
                              setFieldTouched('password')
                            }}
                            onBlur={() => setFieldTouched('password', '')}
                            value={values.password}
                            onChange={handleChange('password')}
                  />
                  {message && <div className='pb-2 text-sm' style={{color: 'red'}}> *{message} </div>}
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
                        onClick={isValid ? handleSubmit : () => {
                          console.log("invalid")
                        }}
                        type={"submit"}
                    >
                      {!isLoading ? 'Đăng nhập' : <Spin/>}
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
