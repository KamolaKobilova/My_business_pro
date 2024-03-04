import { logout } from "./authSlice";
import { Middleware } from "@reduxjs/toolkit";
const jwtExpirationMiddleware: Middleware =
  (storeAPI) => (next) => (action: any) => {
    if (action.type.endsWith("fulfilled")) {
      const result = action.payload;
      if (result && result.error && result.error.message === "jwt expired") {
        storeAPI.dispatch(logout());
      }
    }
    return next(action);
  };

const forbiddenErrorMiddleware: Middleware =
  (storeAPI) => (next) => (action: any) => {
    if (action.type.endsWith("rejected")) {
      const error = action.error;
      if (error && error.message === "Request failed with status code 403") {
        storeAPI.dispatch(logout());
      }
    }
    return next(action);
  };

export const jwtApiMiddleware = [
  jwtExpirationMiddleware,
  forbiddenErrorMiddleware,
];
