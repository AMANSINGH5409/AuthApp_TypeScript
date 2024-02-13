import React from "react";
import Profile from "../components/Dashboard/Profile";
import ForgotPassword from "../components/authentication/ForgotPassword";
import Introduction from "../components/authentication/Introduction";
import Login from "../components/authentication/Login";
import ResetPassword from "../components/authentication/ResetPassword";
import SignUp from "../components/authentication/SignUp";
import type { RouteConfig } from "../types/route";
import { RouteUrl } from "../utils/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes: RouteConfig[] = [
  {
    title: "Introduction",
    path: RouteUrl.introduction,
    component: Introduction,
  },
  {
    title: "Login",
    path: RouteUrl.login,
    component: Login,
  },
  {
    title: "SignUp",
    path: RouteUrl.signUp,
    component: SignUp,
  },
  {
    title: "Profile",
    path: RouteUrl.profile,
    component: Profile,
  },
  {
    title: "Reset Password",
    path: RouteUrl.resetPassword,
    component: ResetPassword,
  },
  {
    title: "Forgot Password",
    path: RouteUrl.forgotPassword,
    component: ForgotPassword,
  },
];

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map((route) => {
    const Component = route.component ?? React.Fragment;

    return (
      <Route key={route.title} path={route.path} element={<Component />}>
        {route.routes && renderRoutes(route.routes)}
      </Route>
    );
  });

const index = () => (
  <BrowserRouter>
    <Routes>{renderRoutes(routes)}</Routes>
  </BrowserRouter>
);

export default index;
