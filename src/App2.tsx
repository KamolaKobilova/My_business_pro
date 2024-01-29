import { RouterProvider } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store, { RootState } from "./redux/store";
import { publicRouter, router } from "./router";
const queryClient = new QueryClient();

function App2() {
  const token = useSelector((state: RootState) => state.auth.token);
  const isUserAuthenticated = token;
console.log("token", token);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={isUserAuthenticated ? router : publicRouter}
          />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
export default App2;
