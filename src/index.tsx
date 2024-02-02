import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import App2 from "./App2";

const queryClient = new QueryClient();

const domNode = document.getElementById("root")!;
if (!domNode) {
  throw new Error("#root element not found");
}
const root = createRoot(domNode);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App2 />
    </Provider>
  </QueryClientProvider>
);
