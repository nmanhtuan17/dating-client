import {Route, Routes} from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../Pages/Auth/Login";
import Home from "../../Pages/Main-Screen/Home";
import Score from "../../Pages/Main-Screen/Score";
import Tuition from "../../Pages/Main-Screen/Tuition";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
        <Route path='/scores' element={<Score />} />
        <Route path='/tuition' element={<Tuition />} />
      </Route>
      <Route path='/sign-in' element={<Login />}/>
    </Routes>
  );
}

export default MainNavigation;
