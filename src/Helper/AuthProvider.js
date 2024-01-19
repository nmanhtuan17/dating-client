import {useAppDispatch, useAppSelector} from "../Store/store";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {bootApp} from "../Store/Action/app.action";

const AuthProvider = () => {
  const {isSignedIn, account} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      dispatch(bootApp()).then((value) => {
        navigate('/home')
      });
    } else {
      navigate('/sign-in');
    }
  }, [isSignedIn]);
  return <></>
}

export default AuthProvider
