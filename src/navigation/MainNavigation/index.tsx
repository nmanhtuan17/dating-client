import RootLayout from "@/layout/RootLayout/RootLayout";
import ChangePass from "@/views/Auth/ChangePass";
import ForgotPassword from "@/views/Auth/Forgot";
import Login from "@/views/Auth/Login";
import SignUp from "@/views/Auth/SignUp";
import Home from "@/views/Main-Screen/Home";
import Favourite from "@/views/Main-Screen/Favourite";
import {Route, Routes} from "react-router-dom";
import Verify from "@/views/Auth/Verify/Verify.tsx";
import OnBoarding from "@/views/common/OnBoarding";
import SettingsProfilePage from "@/views/common/Profile/profile/page.tsx";
import SettingsLayout from "@/views/common/Profile/layout.tsx";
import SettingsAccountPage from "@/views/common/Profile/account/page.tsx";
import MailPage from "@/views/Main-Screen/Message/page.tsx";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/'>
        <Route path={''} element={<RootLayout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/favourite' element={<Favourite/>}/>
          <Route path='/message/' element={<MailPage/>}>
            <Route path=':userId' element={<MailPage/>}/>
          </Route>
          <Route path='/settings/' element={<SettingsLayout/>}>
            <Route path='profile' element={<SettingsProfilePage/>}/>
            <Route path='account' element={<SettingsAccountPage/>}/>
          </Route>
        </Route>
        <Route path='auth/'>
          <Route path='sign-in' element={<Login/>}/>
          <Route path="quen-mat-khau" element={<ForgotPassword/>}/>
          <Route path="changePassword" element={<ChangePass/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
          <Route path='verify/:accountId' element={<Verify/>}/>
        </Route>
        <Route path='boarding/' element={<OnBoarding/>}/>
      </Route>
    </Routes>
  );
}

export default MainNavigation;
