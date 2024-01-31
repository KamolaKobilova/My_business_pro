// App2.tsx

import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { store, persistor, RootState } from "./redux/store";
import { publicRouter, router } from "./router";
import { setToken } from "./redux/authSlice";

const queryClient = new QueryClient();

function App2() {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem("token");
  const reduxToken = useSelector((state: RootState) => state.auth.token);
  const isUserAuthenticated = !!reduxToken;

  useEffect(() => {
    if (storedToken && storedToken !== reduxToken) {
      dispatch(setToken(storedToken));
    }
  }, [storedToken, reduxToken, dispatch]);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider
              router={isUserAuthenticated ? router : publicRouter}
            />
          </PersistGate>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App2;
