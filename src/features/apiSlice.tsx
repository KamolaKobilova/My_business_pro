import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, { getState }: any) => {
      headers.set("Content-Type", "application/json");
      const token = getState()?.auth?.token;
      console.log(getState(), "getState()");
      console.log(token, "token");

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
    // getChatTab: builder.query({
    //     query: () => ({
    //         url: "/api/chats",
    //     }),
    //     // refetchOnMountOrArgChange: true,
    // }),
    // deleteChatTabAPI: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload}`,
    //         method: "DELETE",
    //     }),
    // }),
    // getMessages: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload}/messages`,
    //     }),
    // }),
    // generateChatTabName: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload}/generate-name`,
    //         method: "PUT",
    //     }),
    // }),
    // updateChatTab: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload.id}`,
    //         method: "PUT",
    //         body: payload.changedData,
    //     }),
    // }),
    // pinMessage: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload.chatId}/messages/${payload.id}`,
    //         method: "PUT",
    //         body: payload.body,
    //     }),
    // }),
    // unpinMessage: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload.chatId}/messages/${payload.id}`,
    //         method: "PUT",
    //         body: payload.body,
    //     }),
    // }),
    // deleteMessage: builder.mutation({
    //     query: (payload) => ({
    //         url: `/api/chats/${payload.chatId}/messages/batch`,
    //         method: "DELETE",
    //         body: payload.body,
    //     }),
    // }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetAppointmentsQuery } =
  apiSlice;
