import React, { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import HomePage from "../components/HomePage";
import { CalendarComponent } from "../Pages/MainHomePage/Calendar/CalendarComponent";
import { MyProfile } from "../Pages/MainHomePage/MyProfile.tsx";
import { ServicesPage } from "../Pages/MainHomePage/ServicesPage";

export const router = createBrowserRouter([
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
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
export const publicRouter = createBrowserRouter([
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
]);
