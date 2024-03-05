import React, { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SignIn from '../Pages/SignIn/index';
import SignUp from "../Pages/SignUp/index";
import HomePage from "../components/HomePage";
import { CalendarComponent } from "../Pages/MainHomePage/Calendar/CalendarComponent";
import { MyProfile } from "../Pages/MainHomePage/MyProfile";
import { ServicesPage } from "../Pages/MainHomePage/ServicesPage";
import { StaffPage } from "../Pages/MainHomePage/StaffPage";

export const router = createBrowserRouter(
  [
    { path: "/", element: <CalendarComponent /> },

    {
      path: "calendar",
      element: <CalendarComponent />,
    },

    {
      path: "/my-profile",
      element: <MyProfile />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/staff",
      element: <StaffPage />,
    },

    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  { basename: "/" }
);

export const publicRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/users",
      element: "salom",
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ],
  { basename: "/" }
);
