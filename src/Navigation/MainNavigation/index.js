import {Route, Routes} from "react-router-dom";
import RootLayout from "../../Layout/RootLayout/RootLayout";
import Login from "../../Pages/Auth/Login";
import Home from "../../Pages/Main-Screen/Home";
import Score from "../../Pages/Main-Screen/Score";
import Tuition from "../../Pages/Main-Screen/Tuition";
import StudentList from "../../Pages/Main-Screen/StudentList";
import InsertSubject from "../../Pages/Main-Screen/InsertSubject";
import DetailPage from "../../Pages/Main-Screen/DetailPage";
import RegisterSubject from "../../Pages/Main-Screen/RegisterSubject";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
        <Route path='/scores' element={<Score />} />
        <Route path='/tuition' element={<Tuition />} />
        <Route path='/studentList' element={<StudentList />} />
        <Route path='/insertSubject' element={<InsertSubject />} />
        <Route path='/detailPage' element={<DetailPage />} />
        <Route path='/registerSubject' element={<RegisterSubject />} />

        {/*<Route path="/detailPage/:id" component={DetailPage} />*/}

      </Route>
      <Route path='/sign-in' element={<Login />}/>
    </Routes>
  );
}

export default MainNavigation;
