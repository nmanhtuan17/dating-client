import RootLayout from "@/layout/RootLayout/RootLayout";
import ChangePass from "@/views/Auth/ChangePass";
import ForgotPassword from "@/views/Auth/Forgot";
import Login from "@/views/Auth/Login";
import SignUp from "@/views/Auth/SignUp";
import Home from "@/views/Main-Screen/Home";
import Message from "@/views/Main-Screen/Message";
import Search from "@/views/Main-Screen/Search";
import {Route, Routes} from "react-router-dom";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/message' element={<Message />}/>
      </Route>
      <Route path='/sign-in' element={<Login />}/>
      <Route path="/quen-mat-khau" element={<ForgotPassword />}/>
      <Route path="/changePassword" element={<ChangePass />}/>
      <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
  );
}

export default MainNavigation;
