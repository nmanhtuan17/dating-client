import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import DrawerNavigation from "../../Navigation/DrawerNavigation";
import {useAppDispatch, useAppSelector} from "../../Store/store";
import {bootApp} from "../../Store/Action/app.action";
const RootLayout = () => {
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
  return (
    <main>
      <DrawerNavigation />
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default RootLayout
