import {useAppDispatch, useAppSelector} from "../Store/store";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {loadCourses} from "../Store/Action/course.action";
import {getAllStudents, getAllTeacher} from "../Store/Action/app.action";

const AuthProvider = () => {
  const {isSignedIn, account} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadCourses());
    if (account && account.isAdmin) {
      dispatch(getAllStudents());
      dispatch(getAllTeacher());
    }
    if (isSignedIn) {
      navigate('/home')
    } else {
      navigate('/sign-in');
    }
  }, [isSignedIn]);
  return <></>
}

export default AuthProvider
