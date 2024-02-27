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
import {authSchema, fogotPasswordSchema} from "../../../Helper/FormSchema";
import {ConfigProvider, Spin} from 'antd';
import {Link} from 'react-router-dom';
import useLoading from "../../../Hook/useLoading";
import {AuthService} from "../../../Services/auth.service";
import {toast} from "react-toastify";

function ForgotPassword() {
  const dispatch = useAppDispatch();
  const {message} = useAppSelector(state => state.auth)
  const [messages, setMessages] = useState([]);
  const {isLoading, show, hide} = useLoading();
  const [err, setErr] = useState(null);
  const handleRetrieval = async (value) => {
    console.log(value)
    show();
    try {
      const {data} = await AuthService.resetPassword(value.msv);
      toast.success(data?.message);
      hide();
    } catch (e) {
      console.log(e)
      setErr(e?.response?.data?.message)
      hide();
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <h2 className="fw-bold mb-2 text-center pt-5">Quên mật khẩu</h2>
            <Formik
              initialValues={{msv: ''}}
              validationSchema={fogotPasswordSchema}
              onSubmit={(value) => handleRetrieval(value)}
            >
              {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <div className='mb-4'>
                    <MDBInput wrapperClass='mb-1 w-100' label='Tài khoản' id='msv' type='text' size="lg"
                              onFocus={() => {
                                setFieldTouched('msv')
                              }}
                              onBlur={() => setFieldTouched('msv', '')}
                              value={values.msv}
                              onChange={handleChange('msv')}
                    />
                    {errors.msv && <div className='text-danger' style={{fontSize: 12}}>
                      *{errors.msv}
                    </div>}
                  </div>
                  {err && <div className='pb-2 text-sm' style={{color: 'red'}}> *{err} </div>}
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
                      onClick={isValid ? handleSubmit : () => {
                        console.log(errors)
                      }}
                      type={"submit"}
                    >
                      {!isLoading ? 'Lấy lại mật khẩu' : <Spin/>}
                    </MDBBtn>
                    <Link to="/sign-in" className="forgot-password-link block mt-4">Quay lại đăng nhập</Link>
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

export default ForgotPassword;
