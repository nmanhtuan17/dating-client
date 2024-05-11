import RootLayout from "@/layout/RootLayout/RootLayout";
import ChangePass from "@/views/Auth/ChangePass";
import ForgotPassword from "@/views/Auth/Forgot";
import Login from "@/views/Auth/Login";
import SignUp from "@/views/Auth/SignUp";
import Home from "@/views/Main-Screen/Home";
import Message from "@/views/Main-Screen/Message";
import Favourite from "../../views/Main-Screen/Favourite";
import {Route, Routes} from "react-router-dom";
import Verify from "@/views/Auth/Verify/Verify.tsx";
import OnBoarding from "@/views/common/OnBoarding";
import Profile from "@/views/common/Profile";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/'>
        <Route path={''} element={<RootLayout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/favourite' element={<Favourite/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/profile' element={<Profile/>}/>
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
