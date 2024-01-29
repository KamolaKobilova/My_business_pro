import { createBrowserRouter } from "react-router-dom";

import SignIn from "../Pages/SignIn";
import SignUpForm from "../Pages/SignUp/SignUpForm";
import { MainHomePage } from "../Pages/MainHomePage/MainHomePage";
import HomePage from "../components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHomePage />,
    children: [{
      path: "/salom",
      element: "ChildElement"
    }]
  },
  {
    path: "/user",
    element: "Bilmayman",
  },
]);
export const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
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
