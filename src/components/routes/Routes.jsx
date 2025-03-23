import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const Routes_ = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SignIn />} />

      <Route path={"/SignUp"} element={<SignUp />} />
    </Routes>
  );
};





export default Routes_;
