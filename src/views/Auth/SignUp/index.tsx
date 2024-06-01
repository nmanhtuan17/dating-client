import React, {useState} from 'react';
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
import {register} from "@/store/Action/auth.action.ts";
import {Formik} from "formik";
import {authSchema, signUpSchema} from "@/helper/FormSchema";
import {ConfigProvider, Radio, Spin} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import onChange = toast.onChange;
import {set} from "react-hook-form";

function SignUp() {
  const dispatch = useAppDispatch();
  const {message, isLoading} = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const [gender, setGender] = useState();
  const handleLogin = (value) => {
    dispatch(register({...value, gender: gender})).then(res => {
      if (res.type == 'auth/register/fulfilled') {
        navigate(`/auth/verify/${res.payload.data.accountId}`)
      }
    });
  }

  return (
    <div>

      <img src={require('@/assets/img/bg-image.jpg')}
           className={'absolute top-0 bottom-0 right-0 left-0 w-full h-full'}/>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <h2 className="fw-bold mb-2 text-center pt-5">Đăng ký</h2>
              <Formik
                initialValues={{email: '', fullName: '', password: '', age: '', address: ''}}
                validationSchema={signUpSchema}
                onSubmit={(value) => handleLogin(value)}
              >
                {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                  <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                    <div className='mb-4'>
                      <MDBInput
                        wrapperClass='mb-1 w-100' label='Email' id='email' type='text' size="lg"
                        onFocus={() => {
                          setFieldTouched('email')
                        }}
                        onBlur={() => setFieldTouched('email')}
                        value={values.email}
                        onChange={handleChange('email')}
                      />
                      {errors.email && <div className='text-danger' style={{fontSize: 12}}>
                        {errors.email}
                      </div>}
                    </div>
                    <div className='mb-4'>
                      <MDBInput
                        wrapperClass='mb-1 w-100' label='Họ tên' id='email' type='text' size="lg"
                        onFocus={() => {
                          setFieldTouched('fullName')
                        }}
                        onBlur={() => setFieldTouched('fullName')}
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                      />
                      {errors.fullName && <div className='text-danger' style={{fontSize: 12}}>
                        {errors.fullName}
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
                      {errors.password && <div className='text-danger' style={{fontSize: 12}}>
                        {errors.password}
                      </div>}
                    </div>
                    <div className='mb-4'>
                      <MDBInput
                        wrapperClass='mb-1 w-100' label='Địa chỉ' id='address' type='text' size="lg"
                        onFocus={() => {
                          setFieldTouched('address')
                        }}
                        onBlur={() => setFieldTouched('address')}
                        value={values.address}
                        onChange={handleChange('address')}
                      />
                      {errors.address && <div className='text-danger' style={{fontSize: 12}}>
                        {errors.address}
                      </div>}
                    </div>
                    <div className='flex flex-row justify-between'>
                      <div>
                        <MDBInput
                          wrapperClass='mb-1' label='Tuổi' id='age' type='number' size="lg"
                          onFocus={() => {
                            setFieldTouched('age')
                          }}
                          onBlur={() => setFieldTouched('age')}
                          value={values.age}
                          onChange={handleChange('age')}
                        />
                        {errors.age && <div className='text-danger' style={{fontSize: 12}}>
                          {errors.age}
                        </div>}
                      </div>
                      <Radio.Group className={'p-[12px]'} onChange={(e) => setGender(e.target.value)} value={gender}>
                        <Radio value={'male'}>Nam</Radio>
                        <Radio value={'female'}>Nữ</Radio>
                      </Radio.Group>
                    </div>
                    {message && <div className='pb-1 text-sm' style={{color: 'red'}}> *{message} </div>}
                    <ConfigProvider
                      theme={{
                        token: {
                          fontSize: 14,
                          colorPrimary: "#fff"
                        },
                      }}
                    >
                      <MDBBtn
                        className='mt-3'
                        size='lg'
                        onClick={() => {
                          isValid && handleSubmit()
                        }}
                        type={"submit"}
                      >
                        {!isLoading ? 'Đăng ký' : <Spin/>}
                      </MDBBtn>
                      <div className='mt-2'>
                        You already have account?
                        <Link to={'/auth/sign-in'}>Đăng nhập</Link>
                      </div>
                    </ConfigProvider>
                  </MDBCardBody>
                )}
              </Formik>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default SignUp;
