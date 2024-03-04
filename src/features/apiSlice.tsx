import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../redux/authSlice";
import store from "../redux/store";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      headers.set("Content-Type", "application/json");
      const token = getState()?.auth?.token;

      headers.set("Authorization", "Bearer " + token);
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: "auth/sign-up",
        method: "POST",
        body: formData,
      }),
      transformErrorResponse: (baseQueryReturnValue: any) => {
        if (baseQueryReturnValue?.data?.msg === "jwt expired") {
          store.dispatch(logout());
        }
      },
    }),
    signIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    getAppointments: builder.query({
      query: () => ({
        url: "appointments",
      }),
    }),
    createService: builder.mutation({
      query: (serviceData) => ({
        url: "service",
        method: "POST",
        body: serviceData,
      }),
    }),
    getServiceById: builder.query({
      query: (serviceId) => ({
        url: `service/${serviceId}`,
        method: "GET",
      }),
    }),
    getAllServices: builder.query({
      query: () => ({
        url: "service/",
        method: "GET",
      }),
    }),
    getWorkSpace: builder.query({
      query: () => ({
        url: "workspace",
        method: "GET",
      }),
    }),

    createWorkSpace: builder.mutation({
      query: (workSpaceData) => ({
        url: "workspace",
        method: "POST",
        body: workSpaceData,
      }),
      transformErrorResponse: (baseQueryReturnValue: any) => {
        if (baseQueryReturnValue?.data?.msg === "jwt expired") {
          store.dispatch(logout());
        }
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetAppointmentsQuery,
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useGetWorkSpaceQuery,
  useCreateWorkSpaceMutation,
} = apiSlice;
