import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector, useAppDispatch} from "@/store";

const AuthProvider = () => {
  const {isSignedIn} = useAppSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/home')
    } else {
      navigate('/auth/sign-in');
    }
  }, [isSignedIn]);
  return <></>
}

export default AuthProvider
