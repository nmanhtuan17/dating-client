import React, {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {tempLogin} from "../../../Store/Slice/auth.slice";
import {login} from "../../../Store/Action/auth.action";

function Login() {
  const dispatch = useAppDispatch();
  const [msv, setMsv] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    dispatch(login({msv, password}));
  }
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Đăng nhập</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Mã sinh viên' id='formControlLg' type='text' size="lg" required
                        onChange={(e) => setMsv(e.target.value)}
              />
              <MDBInput wrapperClass='mb-4 w-100' label='Mật khẩu' id='formControlLg' type='password' size="lg" required
                        onChange={(e) => setPassword(e.target.value)}
              />

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password'/>

              <MDBBtn size='lg' onClick={handleLogin}>
                Đăng nhập
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
