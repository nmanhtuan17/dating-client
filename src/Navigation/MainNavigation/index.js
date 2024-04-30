import {Route, Routes} from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../Pages/Auth/Login";
import Home from "../../Pages/Main-Screen/Home";
import ForgotPassword from "../../Pages/Auth/Forgot";
import ChangePass from "../../Pages/Auth/ChangePass";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
      </Route>
      <Route path='/sign-in' element={<Login />}/>
      <Route path="/quen-mat-khau" element={<ForgotPassword />}/>
      <Route path="/changePassword" element={<ChangePass />}/>


    </Routes>
  );
}

export default MainNavigation;
