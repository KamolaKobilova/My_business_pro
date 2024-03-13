import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"
import { logout } from "../redux/authSlice"
import store from "../redux/store"

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers, { getState }: any) => {
    headers.set("Content-Type", "application/json")
    const token = getState()?.auth?.token
    headers.set("Authorization", "Bearer " + token)
    return headers
  },
})
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: async (args, api, extraOptions) => {
    const res: any = baseQuery(args, api, extraOptions)
    if (res.error?.status === 401) {
      store.dispatch(logout())
    }
    return res
  },
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: "auth/sign-up",
        method: "POST",
        body: formData,
      }),
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
    createUsers: builder.mutation({
      query: (userData) => ({
        url: "users",
        method: "POST",
        body: userData,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
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
    getService: builder.query({
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
    }),
    createStaff: builder.mutation({
      query: (staffData) => ({
        url: "staff",
        method: "POST",
        body: staffData,
      }),
    }),
    getStaff: builder.query({
      query: () => ({
        url: "staff",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useCreateUsersMutation,
  useGetUsersQuery,
  useGetAppointmentsQuery,
  useCreateServiceMutation,
  useGetServiceQuery,
  useGetServiceByIdQuery,
  useGetWorkSpaceQuery,
  useCreateWorkSpaceMutation,
  useCreateStaffMutation,
  useGetStaffQuery,
} = apiSlice
