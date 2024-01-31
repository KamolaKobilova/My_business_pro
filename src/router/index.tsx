import React from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUpForm from "../Pages/SignUp/SignUpForm";
import { MainHomePage } from "../Pages/MainHomePage/MainHomePage";
import HomePage from "../components/HomePage";
import { CalendarComponent } from "../Pages/MainHomePage/Calendar/CalendarComponent";
import { MyProfile } from "../Pages/MainHomePage/MyProfile.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHomePage />,
  },
  {
    path: "/calendar",
    element: <CalendarComponent />,
  },

  {
    path: "/my-profile",
    element: <MyProfile />,
  },

  {
    path: "/user",
    element: "Bilmayman",
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
    path: "/sign-up",
    element: <SignUpForm />,
  },
]);
