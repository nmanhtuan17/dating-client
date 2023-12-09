import React from "react";
import {useAppDispatch, useAppSelector} from "../../../Store/store";
import {useSelector} from "react-redux";

const Login = () => {
  const {data}  = useAppSelector(state => state.app)
  return (
    <h1>{data}</h1>
  )
}

export default Login
