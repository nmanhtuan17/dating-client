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
import StudentDetails from "../../Pages/common/StudentDetails";
import Teacher from "../../Pages/Main-Screen/Teacher";
import RoleTeacher from "../../Pages/Teacher";
import StudentImformation from "../../Pages/Main-Screen/StudentImformation";
import ForgotPassword from "../../Pages/Auth/Forgot";
import ChangePass from "../../Pages/Auth/ChangePass";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>

        <Route path='/home' element={<Home />}/>
        <Route path='/scores' element={<Score />} />
        <Route path='/tuition' element={<Tuition />} />
        <Route path='/studentList' element={<StudentList />} />
        <Route path='/studentImformation' element={<StudentImformation />} />
        <Route path='/insertSubject' element={<InsertSubject />} />
        <Route path='/detailPage' element={<DetailPage />} />
        <Route path='/registerSubject' element={<RegisterSubject />} />
        <Route path='/student/details/:studentId' element={<StudentDetails />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path="/detailPage/:id" component={DetailPage} />
        <Route path="/class" element={<RoleTeacher />} />
      </Route>
      <Route path='/sign-in' element={<Login />}/>
      <Route path="/quen-mat-khau" element={<ForgotPassword />}/>
      <Route path="/changePassword" element={<ChangePass />}/>


    </Routes>
  );
}

export default MainNavigation;
