import {useAppDispatch, useAppSelector} from "../Store/store";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const AuthProvider = () => {
  const {isSignedIn, account} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/home')
    } else {
      navigate('/sign-in');
    }
  }, [isSignedIn]);
  return <></>
}

export default AuthProvider
