import {useEffect, useLayoutEffect} from "react";
import {useAppSelector} from "@/store";
import {useNavigate} from "react-router-dom";

export const AuthHelper = () => {
  const {isSignedIn} = useAppSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    } else {
      navigate('/auth/sign-in')
    }
  }, [isSignedIn])
  return <></>
}
