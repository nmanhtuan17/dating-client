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

function ChangePass (){
    const dispatch = useAppDispatch();
    const [msv, setMsv] = useState();
    const [password, setPassword] = useState();
    const {message, isLoading} = useAppSelector(state => state.auth)
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([message, ...messages])
    }, [message]);
    const handleRetrieval = (value) => {
        console.log(value)
    }

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>

                        <h2 className="fw-bold mb-2 text-center pt-5">Đổi mật khẩu</h2>

                        <Formik
                            initialValues={{msv: '', password: ''}}
                            validationSchema={authSchema}
                            onSubmit={(value) => handleRetrieval(value)}
                        >
                            {({values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, setFieldTouched}) => (
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                    <MDBInput wrapperClass='mb-4 w-100' label='Mật khẩu cũ' id='msv' type='text' size="lg"
                                              onFocus={() => {
                                                  setFieldTouched('msv')
                                              }}
                                              onBlur={() => setFieldTouched('msv', '')}
                                              value={values.msv}
                                              onChange={handleChange('msv')}
                                    />
                                    <MDBInput wrapperClass='mb-4 w-100' label='Mật khẩu mới' id='msv' type='text' size="lg"
                                              onFocus={() => {
                                                  setFieldTouched('msv')
                                              }}
                                              onBlur={() => setFieldTouched('msv', '')}
                                              value={values.msv}
                                              onChange={handleChange('msv')}
                                    />
                                    <MDBInput wrapperClass='mb-4 w-100' label='Nhâp lại mật khẩu mới' id='msv' type='text' size="lg"
                                              onFocus={() => {
                                                  setFieldTouched('msv')
                                              }}
                                              onBlur={() => setFieldTouched('msv', '')}
                                              value={values.msv}
                                              onChange={handleChange('msv')}
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
                                        <MDBBtn
                                            size='lg'
                                            onClick={isValid ? handleSubmit : () => {
                                                console.log("invalid")
                                            }}
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
