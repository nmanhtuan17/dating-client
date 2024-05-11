import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "@/store";

const AuthProvider = () => {
  const {isSignedIn, account} = useAppSelector(state => state.auth)
  const {firstAppOpen} = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn && !firstAppOpen) {
      navigate('/boarding')
    }
    else if(isSignedIn && firstAppOpen) {
      navigate('/home')
    }
    else {
      navigate('/auth/sign-in');
    }
  }, [isSignedIn, firstAppOpen]);
  return <></>
}

export default AuthProvider
