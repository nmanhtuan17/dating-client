import {Route, Routes} from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../Pages/Auth/Login";
import Home from "../../Pages/Main-Screen/Home";
import ForgotPassword from "../../Pages/Auth/Forgot";
import ChangePass from "../../Pages/Auth/ChangePass";
import Message from "../../Pages/Main-Screen/Message";
import Search from "../../Pages/Main-Screen/Search";


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
    </Routes>
  );
}

export default MainNavigation;
