import {Route, Routes} from "react-router-dom";
import RootLayout from "../layout/RootLayout";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<RootLayout />}/>
    </Routes>
  )
}
