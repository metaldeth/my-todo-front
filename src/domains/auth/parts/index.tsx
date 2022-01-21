import { Route, Routes } from "react-router";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

export const AuthModule = () => (
  <Routes>
    <Route path={'signIn'} element={<SignIn/>}/>
    <Route path={'signUp'} element={<SignUp/>}/>
  </Routes>
)

