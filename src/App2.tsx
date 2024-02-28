import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { store, persistor, RootState } from "./redux/store";
import { publicRouter, router } from "./router";
import { MainHomePage } from "./Pages/MainHomePage/MainHomePage";



const queryClient = new QueryClient();

function App2() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            {token && <MainHomePage />}
            <RouterProvider router={token ? router : publicRouter} />
          </PersistGate>
        </QueryClientProvider>
      </Provider>
  );
}

export default App2;
