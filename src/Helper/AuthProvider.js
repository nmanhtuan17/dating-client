import {useAppDispatch, useAppSelector} from "../Store/store";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {bootApp} from "../Store/Action/app.action";

const AuthProvider = () => {
  const {isSignIn} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (isSignIn) {
      dispatch(bootApp()).then((value) => {
        navigate('/home')
      });
    } else {
      navigate('/sign-in')
    }
  }, []);
  return <></>
}

export default AuthProvider
