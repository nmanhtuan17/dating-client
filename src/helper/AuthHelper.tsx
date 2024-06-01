import {useEffect, useLayoutEffect} from "react";
import {useAppSelector} from "@/store";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const AuthHelper = () => {
  const {isSignedIn, tokens} = useAppSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn && tokens.accessToken) {
      let tokenData = jwtDecode(tokens.accessToken);
      if (tokenData.exp! <= ~~(new Date().getTime() / 1000)) {
        navigate('/auth/sign-in');
        console.log(123)
      } else {
        navigate('/');
      }
    } else {
      navigate('/auth/sign-in');
    }
  }, [isSignedIn])
  return <></>
}
