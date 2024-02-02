import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
};

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload || "");
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
