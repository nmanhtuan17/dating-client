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
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {login, refreshToken} from "../../../Store/Action/auth.action";
import {Formik} from "formik";
import {authSchema} from "../../../Helper/FormSchema";
import {ConfigProvider, Spin} from 'antd';
import {Link, useNavigate} from 'react-router-dom';

function Login({navigation}) {
  const dispatch = useAppDispatch();
  const {message, isLoading} = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const handleLogin = (value) => {
    // if (value.msv.startsWith("a") || value.msv.startsWith("A")) {
    //   dispatch(login(value));
    // } else {
    //   dispatch(login({mgv: value.msv, password: value.password}));
    //   console.log({mgv: value.msv, password: value.password})
    // }
    navigate('/home')
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
                  <div className='mb-4'>
                    <MDBInput
                      wrapperClass='mb-1 w-100' label='Tài khoản' id='msv' type='text' size="lg"
                      onFocus={() => {
                        setFieldTouched('msv')
                      }}
                      onBlur={() => setFieldTouched('msv', '')}
                      value={values.msv}
                      onChange={handleChange('msv')}
                    />
                    {errors.msv && <div className='text-danger' style={{fontSize: 12}}>
                      {errors.msv}
                    </div>}
                  </div>
                  <div className='mb-4'>
                    <MDBInput
                      wrapperClass='mb-1 w-100' label='Mật khẩu' id='password' type='password' size="lg"
                      onFocus={() => {
                        setFieldTouched('password')
                      }}
                      onBlur={() => setFieldTouched('password', '')}
                      value={values.password}
                      onChange={handleChange('password')}
                    />
                    {errors.password && <div className='text-danger' style={{fontSize: 12}}>
                      {errors.password}
                    </div>}
                  </div>
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
                        navigate('/home')
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
