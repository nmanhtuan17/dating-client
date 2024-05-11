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
import { Formik } from "formik";
import {verifySchema} from "@/helper/FormSchema";
import { ConfigProvider, Spin } from 'antd';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {verifyCode} from "@/store/Action/auth.action.ts";

function Verify() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {accountId} = useParams();
  const { message, isLoading } = useAppSelector<any>(state => state.auth);
  const handleVerify = async (value) => {
    dispatch(verifyCode({accountId, value})).then(res => {
      if(res.type == 'auth/verify/fulfilled') {
        navigate('/auth/sign-in')
      }
    })
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <h2 className="fw-bold text-center pt-5">Xác thực tài khoàn</h2>
            <div className="font-semibold mb-2 text-center">Mã xác thực đã được gửi tới email của bạn</div>
            <Formik
              initialValues={{code: ''}}
              validationSchema={verifySchema}
              onSubmit={(value) => handleVerify(value)}
            >
              {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                  <div className='mb-4'>
                    <MDBInput
                      wrapperClass='mb-1 w-100' label='Code' id='code' type='text' size="lg"
                      onFocus={() => {
                        setFieldTouched('code')
                      }}
                      onBlur={() => setFieldTouched('code')}
                      value={values.code}
                      onChange={handleChange('code')}
                    />
                    {errors.code && <div className='text-danger' style={{fontSize: 12}}>
                      {errors.code}
                    </div>}
                  </div>
                  {message && <div className='pb-2 text-sm' style={{color: 'red'}}> *{message} </div>}
                  <ConfigProvider
                    theme={{
                      token: {
                        fontSize: 14,
                      },
                    }}
                  >
                    <MDBBtn
                      size='lg'
                      onClick={() => {
                        isValid && handleSubmit()
                      }}
                      type={"submit"}
                    >
                      {!isLoading ? 'Submit' : <Spin/>}
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

export default Verify;
