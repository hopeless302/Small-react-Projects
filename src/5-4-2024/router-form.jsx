import React from "react";
import Layout from "./layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./auth";
import Signin from "./auth/signin";
import SignUp from "./auth/signup";
import HomePage from "./home";
import NotFound from "./not-found";

const RouterForm = () => {
  const token = localStorage.getItem("QWERTYUIOP");
  console.log(token);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRequired />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterForm;
