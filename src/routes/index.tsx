import {Route, Routes} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {Signin} from "@pages/auth/Singin";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<RootLayout />}/>
      <Route path={'/sign-in'} element={<Signin />}/>
    </Routes>
  )
}
