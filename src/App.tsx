import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Provider, useDispatch, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { setToken } from "./redux/authSlice";
import store, { RootState } from "./redux/store";
import SignIn from "./Pages/SignIn";
// import SignUpForm from "./Pages/SignUp/SignUpForm";
import HomePage from "./components/HomePage";
import { CalendarComponent } from "./Pages/MainHomePage/Calendar/CalendarComponent";
import { MainHomePage } from "./Pages/MainHomePage/MainHomePage";
import SignUpForm from "./Pages/SignUp/SignUpForm";
const queryClient = new QueryClient();

function App() {
  const handleSignUpSuccess = (token: string) => {
    console.log("Sign-up successful! Token:", token);
  };

  const dispatch = useDispatch();

  const storedToken = localStorage.getItem("authToken");

  if (storedToken) {
    dispatch(setToken(storedToken));
  }

  const token = useSelector((state: RootState) => state.auth.token);
  const isUserAuthenticated = !!token;

  return (
    <>
      {/* {" "}
      <SignUpForm
        onSignUpSuccess={function (token: string): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              {isUserAuthenticated ? (
                <>
                  <Route path="/" element={<MainHomePage />} />
                  <Route path="/calendar" element={<CalendarComponent />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/sign-in" replace />} />
              )}
            </Routes>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
export default App;
